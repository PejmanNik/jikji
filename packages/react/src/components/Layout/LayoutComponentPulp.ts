import { createElement, ElementType, ReactElement, ReactNode } from 'react';
import {
  ComponentPulp,
  ComponentPulpProps,
  ComponentPulpState,
} from 'core/pulp/ComponentPulp';
import { ExplicitPartial, merge, mergeProps } from 'core/pulp/pulpHelpers';
import { Pulp } from 'core/pulp/pulpTypes';

export interface LayoutOptions {
  disableSnapshot: boolean;
  disableWrap: boolean;
}

export class LayoutComponentPulp extends ComponentPulp {
  readonly layoutOptions: LayoutOptions;
  readonly component: ReactElement;

  public constructor(
    elementType: ElementType,
    props: ComponentPulpProps,
    rendered: Pulp[] | null,
    component: ReactElement | null,
    state: ComponentPulpState | null,
    options: LayoutOptions,
  ) {
    super(elementType, props, rendered, component, state);
    this.layoutOptions = options;
    this.component = this.createComponent(props, props.children);
  }

  public clone(newProps: ExplicitPartial<{
    elementType: ElementType,
    props: ComponentPulpProps,
    rendered: Pulp[] | null,
    component: ReactElement,
    state: ComponentPulpState
  }>
  ) {
    return new LayoutComponentPulp(
      newProps.elementType ?? this.elementType,
      mergeProps(newProps.rendered, this.props, newProps.props),
      merge(this.rendered, newProps.rendered),
      merge(this.component, newProps.component),
      merge(this.state, newProps.state),
      this.layoutOptions);
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

    return new LayoutComponentPulp(
      pulp.elementType,
      props,
      rendered,
      null,
      pulp.state,
      options,
    );
  }

  protected createComponent(
    props: ComponentPulpProps,
    children?: ReactNode,
  ): ReactElement {

    // why layoutOptions?. : it can be null when this method 
    // has been called from super class
    if (this.layoutOptions?.disableSnapshot) {
      const key = props.key;
      return createElement(this.elementType, { key }, children);
    }

    return super.createComponent(props, children);
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

  canBeSplitted() {
    return !this.layoutOptions.disableWrap;
  }

}
