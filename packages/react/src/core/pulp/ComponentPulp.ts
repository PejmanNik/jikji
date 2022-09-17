import React, {
  createElement,
  ElementType,
  ReactElement,
  ReactNode,
} from 'react';
import type {Fiber} from 'react-reconciler';
import {createAlternateRendered} from './componentShared';
import {Pulp, PulpType, SplitPulp} from './pulpTypes';

export interface ComponentPulpProps {
  key: string | null;
  children: ReactNode;
}

export interface ComponentPulpState {
  readonly splitSkipped: boolean;
  readonly forceVisit: boolean;
}

export class ComponentPulp {
  readonly type: PulpType.Component;
  readonly elementType: ElementType;
  readonly props: ComponentPulpProps;
  readonly rendered: Pulp[] | null;
  readonly component: ReactElement;
  readonly state: ComponentPulpState;

  protected constructor(
    elementType: ElementType,
    props: ComponentPulpProps,
    rendered: Pulp[] | null,
    component?: ReactElement,
    state?: ComponentPulpState,
  ) {
    this.type = PulpType.Component;
    this.elementType = elementType;
    this.props = props;
    this.rendered = rendered;
    this.state = state ?? {forceVisit: false, splitSkipped: false};

    this.component =
      component ??
      ComponentPulp.createComponent(React.Fragment, props, props.children);
  }

  protected clone(
    elementType: ElementType,
    props: ComponentPulpProps,
    rendered: Pulp[] | null,
    component?: ReactElement,
    state?: ComponentPulpState,
  ) {
    return new ComponentPulp(elementType, props, rendered, component, state);
  }

  public static fromFiber(
    fiber: Fiber,
    key: string,
    rendered: Pulp[] | null,
  ): ComponentPulp {
    const elementType = fiber.elementType ?? React.Fragment;
    let props = {...fiber.memoizedProps, key};

    if (elementType == React.Fragment) {
      props = {key: fiber.key, children: fiber.memoizedProps};
    } else if (rendered) {
      props.children = rendered.map(x => x.component);
    }

    return new ComponentPulp(elementType, props, rendered);
  }

  protected static createComponent(
    elementType: ElementType,
    props: ComponentPulpProps,
    children?: ReactNode,
  ): ReactElement {
    const key = props.key;
    return createElement(elementType, {key}, children);
  }

  protected update(rendered: Array<Pulp>): ComponentPulp | null {
    if (rendered.length == 0) {
      return null;
    }

    const props = {
      ...this.props,
      children: rendered.map(x => x.component),
    };

    //convert user custom component to a Fragment in order to
    //manipulate inside this component
    return this.clone(React.Fragment, props, rendered);
  }

  canBeSplitted() {
    return true;
  }

  setState(value: Partial<ComponentPulpState>) {
    return this.clone(
      this.elementType,
      this.props,
      this.rendered,
      this.component,
      {...this.state, ...value},
    );
  }

  split(
    splittedRendered: Array<Pulp | null>,
    resultComponents: (ReactElement | string | number)[],
  ): SplitPulp<ReactElement | string | number> {
    const component = ComponentPulp.createComponent(
      React.Fragment,
      this.props,
      resultComponents,
    );

    const alternateRendered = createAlternateRendered(
      splittedRendered,
      this.rendered,
    );
    const pulp = this.update(alternateRendered);

    return {pulp, component};
  }
}
