import { ReportPlugin } from 'core/engine/plugin';
import { ComponentPulp } from 'core/pulp/ComponentPulp';
import React from 'react';
import PageBreak from './index';

export const pageBreakPlugin: ReportPlugin = {
  component: PageBreak,
  build: pulp => {
    if (!(pulp instanceof ComponentPulp)) {
      return pulp;
    }

    return pulp.setState({ isForceToVisit: true });
  },
  split: splitNodeInfo => {
    return {
      isCompleted: true,
      pageOffset: splitNodeInfo.pageOffset,
      lastNodeY: splitNodeInfo.lastNodeY,
      lastTextNodeY: splitNodeInfo.lastTextNodeY,
      component: <React.Fragment />,
      pulp: null,
    };
  },
};
