import { ElementType, ReactElement } from 'react';
import {
  ComponentPulp,
  ComponentPulpProps,
  ComponentPulpState,
} from 'core/pulp/ComponentPulp';
import { ExplicitPartial, merge, mergeProps } from 'core/pulp/pulpHelpers';
import { Pulp } from 'core/pulp/pulpTypes';

export interface LayoutOptions {
  disableWrap: boolean;
}

export class LayoutComponentPulp extends ComponentPulp {
  readonly layoutOptions: LayoutOptions;

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
  }

  public clone(newProps: ExplicitPartial<{
    elementType: ElementType,
    props: ComponentPulpProps,
    rendered: Pulp[] | null,
    component: ReactElement,
    state: ComponentPulpState | null
  }>) {
    return new LayoutComponentPulp(
      newProps.elementType ?? this.elementType,
      mergeProps(newProps.rendered, this.props, newProps.props),
      merge(this.rendered, newProps.rendered),
      merge(this.component, newProps.component),
      merge(this.state, newProps.state),
      this.layoutOptions);
  }

  static FromPulp(pulp: ComponentPulp, options: LayoutOptions) {

    const props = {
      ...pulp.props,
      children: pulp.rendered?.map(x => x.component),
    };

    return new LayoutComponentPulp(
      pulp.elementType,
      props,
      pulp.rendered,
      null,
      pulp.state,
      options,
    );
  }

  canBeSplitted() {
    return !this.layoutOptions.disableWrap;
  }

}
