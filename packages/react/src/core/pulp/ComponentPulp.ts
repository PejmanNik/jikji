import React, {
  createElement,
  ElementType,
  ReactElement,
  ReactNode,
} from 'react';
import type { Fiber } from 'react-reconciler';
import { createAlternateRendered } from './componentShared';
import { ExplicitPartial, merge, mergeProps } from './pulpHelpers';
import { Pulp, PulpType, SplitPulp } from './pulpTypes';

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
    this.state = state ?? { forceVisit: false, splitSkipped: false };

    this.component = component ?? this.createComponent(props, props.children);
  }

  public clone(newProps: ExplicitPartial<{
    elementType: ElementType,
    props: ComponentPulpProps,
    rendered: Pulp[] | null,
    component: ReactElement,
    state: ComponentPulpState
  }>
  ) {
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
    children?: ReactNode,
  ): ReactElement {
    const key = props.key;
    return createElement(React.Fragment, { key }, children);
  }

  protected update(rendered: Array<Pulp>): ComponentPulp | null {
    if (rendered.length == 0) {
      return null;
    }

    //convert user custom component to a Fragment in order to
    //manipulate inside this component
    return this.clone({ elementType: React.Fragment, rendered, component: null });
  }

  canBeSplitted() {
    return true;
  }

  setState(value: Partial<ComponentPulpState>) {
    return this.clone({ state: { ...this.state, ...value } }
    );
  }

  split(
    splittedRendered: Array<Pulp | null>,
    resultComponents: (ReactElement | string | number)[],
  ): SplitPulp<ReactElement | string | number> {
    const component = this.createComponent(
      this.props,
      resultComponents,
    );

    const alternateRendered = createAlternateRendered(
      splittedRendered,
      this.rendered,
    );
    const pulp = this.update(alternateRendered);

    return { pulp, component };
  }
}
