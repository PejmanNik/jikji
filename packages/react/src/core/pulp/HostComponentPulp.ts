import idGenerator from 'core/idGenerator';
import {createElement, ReactElement, ReactNode} from 'react';
import type {Fiber} from 'react-reconciler';
import {ComponentPulp} from './ComponentPulp';
import {createAlternateRendered} from './componentShared';
import {
  buildMarginsInfo,
  getMarginTopWithSiblingCollapse,
} from './marginHelper';
import {Pulp, PulpType, SplitPulp} from './pulpTypes';
import {buildVirtualOffset} from './virtualOffset';

export interface HostComponentProps {
  [key: string]: unknown;
  key: string | null;
  style: Record<string, unknown> | null;
  ref: Fiber['ref'];
  children: ReactNode;
}
export interface DomBoxInfo {
  height: number;
  y: number;
  marginTop: number;
  marginBottom: number;
  marginTopWithCollapse: number;
}
export interface VirtualOffset {
  split: number;
  element: number;
}
export interface ElementHeightInfo {
  virtualOffset: VirtualOffset;
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
  readonly props: HostComponentProps;
  readonly rendered: Pulp[] | null;
  readonly nodeY: number;
  readonly component: ReactElement;
  readonly version: number;
  readonly domBoxInfo: DomBoxInfo;
  readonly hasChildrenWithForceVisit: boolean;

  private constructor(
    id: string,
    elementType: string,
    props: HostComponentProps,
    domNode: Element,
    domBoxInfo: DomBoxInfo,
    rendered: Pulp[] | null,
    version: number,
  ) {
    this.id = id;
    this.type = PulpType.HostComponent;
    this.elementType = elementType;
    this.props = props;
    this.domNode = domNode;
    this.rendered = rendered;
    this.domBoxInfo = domBoxInfo;
    this.nodeY = domBoxInfo.y;
    this.version = version;
    this.hasChildrenWithForceVisit = this.hasPulpWithForceVisit(rendered);
    this.component = this.createComponent(props, props.children);
  }

  public static fromFiber(
    fiber: Fiber,
    key: string,
    rendered: Pulp[] | null,
  ): HostComponentPulp {
    const elementType = fiber.elementType;
    const props = {...fiber.memoizedProps, key, ref: fiber.ref};
    const domNode = fiber.stateNode as Element;

    const clientRect = domNode.getBoundingClientRect();
    const style = window.getComputedStyle(domNode);
    const marginBottom = parseFloat(style.marginBottom);
    const marginTop = parseFloat(style.marginTop);

    const domBoxInfo: DomBoxInfo = {
      height: clientRect.height,
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
      1,
    );
  }

  private createComponent(
    props: HostComponentProps,
    children?: ReactNode,
  ): ReactElement {
    const validProps = {...props, 'data-id': this.id};
    delete validProps.children;

    return createElement(this.elementType, validProps, children);
  }

  getHeightInfo(parent: HostComponentPulp | ComponentPulp): ElementHeightInfo {
    const marginsInfo = buildMarginsInfo(this, parent);
    const virtualOffset = buildVirtualOffset(this, marginsInfo);

    return {
      virtualOffset,
      marginBottom: marginsInfo.marginBottomWithCollapse,
      marginTop: marginsInfo.marginTopWithCollapse,
      fullHeight: marginsInfo.marginBottomWithCollapse + this.domBoxInfo.height,
      nodeHeight: this.domBoxInfo.height,
    };
  }

  private hasPulpWithForceVisit(rendered: Pulp[] | null): boolean {
    if (!rendered) return false;

    for (const pulp of rendered) {
      if (pulp instanceof HostComponentPulp && pulp.hasChildrenWithForceVisit) {
        return true;
      } else if (pulp instanceof ComponentPulp && pulp.state.forceVisit) {
        return true;
      }
    }

    return false;
  }

  private update(
    nodeY: number,
    rendered: Array<Pulp>,
  ): HostComponentPulp | null {
    if (rendered.length == 0) {
      return null;
    }
    const domBoxInfo = {...this.domBoxInfo};
    const heightOffset = nodeY - this.nodeY;

    domBoxInfo.y = nodeY;
    domBoxInfo.height -= heightOffset;

    const props = {...this.props, children: rendered.map(x => x.component)};
    return new HostComponentPulp(
      this.id,
      this.elementType,
      props,
      this.domNode,
      domBoxInfo,
      rendered,
      this.version + 1,
    );
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

    return {pulp, component};
  }

  updateMargins(parent: HostComponentPulp | ComponentPulp): Pulp {
    const marginTopWithCollapse = getMarginTopWithSiblingCollapse(parent, this);
    const domBoxInfo = {...this.domBoxInfo, marginTopWithCollapse};

    return new HostComponentPulp(
      this.id,
      this.elementType,
      this.props,
      this.domNode,
      domBoxInfo,
      this.rendered,
      this.version,
    );
  }
}

const buildPulpId = idGenerator();
