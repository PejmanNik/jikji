import { ReportPlugin } from 'core/engine/plugin';
import { ComponentPulp } from 'core/pulp/ComponentPulp';
import { LayoutComponentPulp } from './LayoutComponentPulp';
import Layout, { LayoutProps } from './index';

export const layoutPlugin: ReportPlugin = {
  component: Layout,
  build: pulp => {
    if (!(pulp instanceof ComponentPulp)) {
      return pulp;
    }
    const props = pulp.props as LayoutProps;

    return LayoutComponentPulp.FromPulp(pulp, {
      disableWrap: props.disableWrap ?? false,
    });
  },
};
