import {ReportPlugin} from 'core/engine/plugin';
import {ComponentPulp} from 'core/pulp/ComponentPulp';
import PageBreak from './index';

export const pageBreakPlugin: ReportPlugin = {
  component: PageBreak,
  build: pulp => {
    if (!(pulp instanceof ComponentPulp)) {
      return pulp;
    }

    return pulp.setState({forceVisit: true});
  },
  split: splitNodeInfo => {
    return {
      isCompleted: true,
      pageOffset: splitNodeInfo.pageOffset,
      lastNodeY: splitNodeInfo.lastNodeY,
      lastTextNodeY: splitNodeInfo.lastTextNodeY,
      component: null,
      pulp: null,
    };
  },
};
