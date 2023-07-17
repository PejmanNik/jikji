import React, {
  createElement,
  ElementType,
  ReactElement,
  ReactNode,
} from 'react';
import type { Fiber } from 'react-reconciler';
import { createAlternateRendered } from './componentShared';
import { ExplicitPartial, merge, mergeProps } from './pulpHelpers';
import { Pulp, PulpState, PulpType, SplitPulp } from './pulpTypes';
import { hasRenderedWithForceVisit } from './pulpShared';

export interface ComponentPulpProps {
  key: string | null;
  children: ReactNode;
}

export interface ComponentPulpState extends PulpState {
  readonly splitSkipped: boolean;
}

export class ComponentPulp {
  readonly type: PulpType.Component;
  readonly elementType: ElementType;
  readonly props: ComponentPulpProps;
  readonly rendered: Pulp[] | null;
  readonly component: ReactElement;
  readonly state: ComponentPulpState;

  public constructor(
    elementType: ElementType,
    props: ComponentPulpProps,
    rendered: Pulp[] | null,
    component?: ReactElement | null,
    state?: ComponentPulpState | null,
  ) {
    this.type = PulpType.Component;
    this.elementType = elementType;
    this.props = props;
    this.rendered = rendered;
    this.state = { splitSkipped: false, isSplitted: false, ...state, isForceToVisit: state?.isForceToVisit || hasRenderedWithForceVisit(rendered) };

    this.component = component ?? this.createComponent(props, elementType, props.children);
  }

  public clone(newProps: ExplicitPartial<{
    elementType: ElementType,
    props: ComponentPulpProps,
    rendered: Pulp[] | null,
    component: ReactElement,
    state: ComponentPulpState | null
  }>) {
    return new ComponentPulp(
      newProps.elementType ?? this.elementType,
      mergeProps(newProps.rendered, this.props, newProps.props),
      merge(this.rendered, newProps.rendered),
      merge(this.component, newProps.component),
      merge(this.state, newProps.state));
  }

  public static fromFiber(
    fiber: Fiber,
    key: string,
    rendered: Pulp[] | null,
  ): ComponentPulp {
    const elementType = fiber.elementType ?? React.Fragment;
    let props = { ...fiber.memoizedProps, key };

    if (elementType == React.Fragment) {
      props = { key: fiber.key, children: fiber.memoizedProps };
    } else if (rendered) {
      props.children = rendered.map(x => x.component);
    }

    return new ComponentPulp(elementType, props, rendered);
  }

  protected createComponent(
    props: ComponentPulpProps,
    elementType: ElementType,
    children?: ReactNode,
  ): ReactElement {
    const key = props.key;
    return createElement(elementType, { key }, children);
  }

  protected update(rendered: Array<Pulp>): ComponentPulp | null {
    if (rendered.length == 0) {
      return null;
    }

    //convert user custom component to a Fragment in order to
    //manipulate inside this component
    return this.clone({ elementType: React.Fragment, rendered, component: null, state: { ...this.state, isSplitted: true } });
  }

  canBeSplitted() {
    return true;
  }

  setState(value: Partial<ComponentPulpState>) {
    return this.clone({ state: { ...this.state, ...value } });
  }

  split(
    splittedRendered: Array<Pulp | null>,
    resultComponents: (ReactElement | string | number)[],
  ): SplitPulp<ReactElement | string | number> {


    const alternateRendered = createAlternateRendered(
      splittedRendered,
      this.rendered,
    );

    // the component is not changed at all and we can use use entire component
    if (alternateRendered.length == 0 && !this.state.isSplitted)
      return { pulp: null, component: this.component }

    const pulp = this.update(alternateRendered);
    const component = this.createComponent(
      this.props,
      React.Fragment,
      resultComponents,
    );

    return { pulp, component };
  }
}
