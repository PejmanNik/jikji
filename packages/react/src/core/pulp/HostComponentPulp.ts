import idGenerator from 'core/idGenerator';
import { createElement, ReactElement, ReactNode } from 'react';
import type { Fiber } from 'react-reconciler';
import { ComponentPulp } from './ComponentPulp';
import { createAlternateRendered } from './componentShared';
import {
  buildMarginsInfo,
  getMarginTopWithSiblingCollapse,
} from './marginHelper';
import { ExplicitPartial, merge, mergeProps } from './pulpHelpers';
import { Pulp, PulpState, PulpType, SplitPulp } from './pulpTypes';
import { buildVirtualOffset } from './virtualOffset';
import { hasRenderedWithForceVisit } from './pulpShared';

export interface HostComponentPulpProps {
  [key: string]: unknown;
  key: string | null;
  style: Record<string, unknown> | null;
  ref: Fiber['ref'];
  children: ReactNode;
}

export interface Offset {
  split: number;
  element: number;
}

export interface DomBoxInfo {
  height: number;
  offset: Offset;
  y: number;
  marginTop: number;
  marginBottom: number;
  marginTopWithCollapse: number;
}

export class OffsetInfo {
  readonly virtual: Offset
  readonly constant: Offset

  readonly split: number;
  readonly element: number;

  constructor(constant: Offset, virtual: Offset) {
    this.constant = constant;
    this.virtual = virtual;

    this.split = constant.split + virtual.split;
    this.element = constant.element + virtual.element;
  }
}

export interface ElementHeightInfo {
  offset: OffsetInfo;
  marginTop: number;
  marginBottom: number;
  fullHeight: number;
  nodeHeight: number;
}

export class HostComponentPulp {
  readonly id: string;
  readonly type: PulpType.HostComponent;
  readonly elementType: string;
  readonly domNode: Element;
  readonly props: HostComponentPulpProps;
  readonly rendered: Pulp[] | null;
  readonly nodeY: number;
  readonly component: ReactElement;
  readonly domBoxInfo: DomBoxInfo;
  readonly state: PulpState;

  public constructor(
    id: string,
    elementType: string,
    props: HostComponentPulpProps,
    domNode: Element,
    domBoxInfo: DomBoxInfo,
    rendered: Pulp[] | null,
    state: PulpState | null,
  ) {
    this.id = id;
    this.type = PulpType.HostComponent;
    this.elementType = elementType;
    this.props = props;
    this.domNode = domNode;
    this.rendered = rendered;
    this.domBoxInfo = domBoxInfo;
    this.nodeY = domBoxInfo.y;
    this.state = state ?? { isForceToVisit: hasRenderedWithForceVisit(rendered), isSplitted: false };

    this.component = this.createComponent(props, props.children);
  }

  public static fromFiber(
    fiber: Fiber,
    key: string,
    rendered: Pulp[] | null,
  ): HostComponentPulp {
    const elementType = fiber.elementType;
    const props = { ...fiber.memoizedProps, key, ref: fiber.ref };
    const domNode = fiber.stateNode as Element;

    const clientRect = domNode.getBoundingClientRect();
    const style = window.getComputedStyle(domNode);
    const marginBottom = parseFloat(style.marginBottom);
    const marginTop = parseFloat(style.marginTop);

    const domBoxInfo: DomBoxInfo = {
      height: clientRect.height,
      offset: {
        element: 0,
        split: 0,
      },
      y: clientRect.y,
      marginBottom,
      marginTop,
      marginTopWithCollapse: marginTop,
    };

    return new HostComponentPulp(
      buildPulpId.next().value.toString(),
      elementType,
      props,
      domNode,
      domBoxInfo,
      rendered,
      null,
    );
  }

  public clone(newProps: ExplicitPartial<{
    props: HostComponentPulpProps,
    domBoxInfo: DomBoxInfo,
    rendered: Pulp[] | null,
    state: PulpState | null
  }>) {
    return new HostComponentPulp(
      this.id,
      this.elementType,
      mergeProps(newProps.rendered, this.props, newProps.props),
      this.domNode,
      newProps.domBoxInfo ?? this.domBoxInfo,
      merge(this.rendered, newProps.rendered),
      merge(this.state, newProps.state)
    );
  }

  protected createComponent(
    props: HostComponentPulpProps,
    children?: ReactNode,
  ): ReactElement {
    const validProps = { ...props, 'data-id': this.id };
    delete validProps.children;

    return createElement(this.elementType, validProps, children);
  }

  public getHeightInfo(parent: HostComponentPulp | ComponentPulp): ElementHeightInfo {
    const marginsInfo = buildMarginsInfo(this, parent);
    const virtualOffset = buildVirtualOffset(this, marginsInfo);

    return {
      offset: new OffsetInfo(this.domBoxInfo.offset, virtualOffset),
      marginBottom: marginsInfo.marginBottomWithCollapse,
      marginTop: marginsInfo.marginTopWithCollapse,
      fullHeight: marginsInfo.marginBottomWithCollapse + this.domBoxInfo.height,
      nodeHeight: this.domBoxInfo.height,
    };
  }

  protected update(
    nodeY: number,
    rendered: Array<Pulp>,
  ): HostComponentPulp | null {
    if (rendered.length == 0) {
      return null;
    }
    const domBoxInfo = { ...this.domBoxInfo };
    const newHeight = nodeY - this.nodeY;

    domBoxInfo.y = nodeY;
    domBoxInfo.height -= newHeight;

    return this.clone({ domBoxInfo, rendered, state: { ...this.state ,isSplitted: true } });
  }

  split(
    nodeY: number,
    splittedRendered: Array<Pulp | null>,
    resultComponents: (ReactElement | string | number)[],
  ): SplitPulp<ReactElement | string | number> {
    const component = this.createComponent(this.props, resultComponents);
    const alternateRendered = createAlternateRendered(
      splittedRendered,
      this.rendered,
    );
    const pulp = this.update(nodeY, alternateRendered);

    return { pulp, component };
  }

  updateMargins(parent: HostComponentPulp | ComponentPulp): Pulp {
    const marginTopWithCollapse = getMarginTopWithSiblingCollapse(parent, this);
    const domBoxInfo = { ...this.domBoxInfo, marginTopWithCollapse };

    return new HostComponentPulp(
      this.id,
      this.elementType,
      this.props,
      this.domNode,
      domBoxInfo,
      this.rendered,
      this.state,
    );
  }
}

const buildPulpId = idGenerator();
