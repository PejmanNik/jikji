import {
  ComponentPulp,
  ComponentPulpProps,
  ComponentPulpState,
} from 'core/pulp/ComponentPulp';
import {Pulp, SplitPulp} from 'core/pulp/pulpTypes';
import React, {ElementType, ReactElement} from 'react';

export interface LayoutOptions {
  disableSnapshot: boolean;
  disableWrap: boolean;
}

export class LayoutComponentPulp extends ComponentPulp {
  readonly layoutOptions: LayoutOptions;

  public constructor(
    elementType: ElementType,
    props: ComponentPulpProps,
    rendered: Pulp[] | null,
    component: ReactElement | undefined,
    state: ComponentPulpState | undefined,
    options: LayoutOptions,
  ) {
    super(elementType, props, rendered, component, state);
    this.layoutOptions = options;
  }

  protected clone(
    elementType: ElementType,
    props: ComponentPulpProps,
    rendered: Pulp[] | null,
    component?: ReactElement,
    state?: ComponentPulpState,
  ) {
    return new LayoutComponentPulp(
      elementType,
      props,
      rendered,
      component,
      state,
      this.layoutOptions,
    );
  }

  static FromPulp(pulp: ComponentPulp, options: LayoutOptions) {
    const rendered = LayoutComponentPulp.createRenderedByOptions(
      pulp.rendered,
      options,
    );
    const props = {
      ...pulp.props,
      children: rendered?.map(x => x.component),
    };

    const component = LayoutComponentPulp.createComponentByOptions(
      pulp.elementType,
      props,
      options,
    );

    return new LayoutComponentPulp(
      pulp.elementType,
      props,
      rendered,
      component,
      pulp.state,
      options,
    );
  }

  static createRenderedByOptions(
    rendered: Pulp[] | null,
    options: LayoutOptions,
  ): Pulp[] | null {
    if (options.disableSnapshot && rendered) {
      return rendered.map(p => {
        if (p instanceof ComponentPulp) {
          return LayoutComponentPulp.FromPulp(p, options);
        }
        return p;
      });
    }

    return rendered;
  }

  static createComponentByOptions(
    elementType: ElementType,
    props: ComponentPulpProps,
    options: LayoutOptions,
  ) {
    if (options.disableSnapshot) {
      return ComponentPulp.createComponent(elementType, props, props.children);
    }

    return ComponentPulp.createComponent(React.Fragment, props, props.children);
  }

  canBeSplitted() {
    return !this.layoutOptions.disableWrap;
  }

  split(
    splittedRendered: Array<Pulp | null>,
    resultComponents: (ReactElement | string | number)[],
  ): SplitPulp<ReactElement | string | number> {
    return super.split(splittedRendered, resultComponents);
  }
}
