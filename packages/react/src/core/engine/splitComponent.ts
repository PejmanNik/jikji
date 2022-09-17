import log, {LogFlag} from 'core/log';
import {ComponentPulp} from 'core/pulp/ComponentPulp';
import {splitComponentByRendered} from './componentShared';
import {SplitPulpInfo, SplitPulpResult} from './splitTypes';

export function splitComponent(
  splitNodeInfo: SplitPulpInfo,
  pulp: ComponentPulp,
): SplitPulpResult {
  // if component return new components, we will try
  // to split based on these result rendered component

  if (pulp.rendered) {
    if (!pulp.canBeSplitted()) {
      // can not know the ComponentPulp height as it is not a native element, calling split
      // go recursively down and measure if it will fit to current page or not
      // prettier-ignore
      log.debug("ComponentPulp can't be splitted, trying to split it to check if fit the page", {level: splitNodeInfo.level, pulp}, [LogFlag.SplitElement]);
    }

    // prettier-ignore
    log.debug('split ComponentPulp by rendered', {pulp}, [LogFlag.SplitElement]);

    const result = splitComponentByRendered(splitNodeInfo, pulp);

    // prettier-ignore
    log.debug('split ComponentPulp result', {pulp: result.pulp, component: result.component}, [LogFlag.SplitElement]);

    if (!pulp.canBeSplitted() && result.pulp == null) {
      // prettier-ignore
      log.debug("ComponentPulp can't be splitted, but it fit the page", {level: splitNodeInfo.level, pulp}, [LogFlag.SplitElement]);

      return result;
    }

    if (pulp.canBeSplitted()) {
      return result;
    }
  }

  // prettier-ignore
  log.debug("ComponentPulp can't be splitted, and doesn't fit the page", {level: splitNodeInfo.level, pulp}, [LogFlag.SplitElement]);

  if (pulp.state.splitSkipped) {
    // can't split this component and it doesn't fit in a empty page
    throw new Error(
      `The component ${pulp.elementType} can't be split and doesn't fit in a page.`,
    );
  } else {
    // can't split this component, complete this page,
    // and will try again in the next empty page.
    // prettier-ignore
    log.debug("ComponentPulp can't be splitted, Will try it again in the next empty page", {level: splitNodeInfo.level, pulp}, [LogFlag.SplitElement]);

    return {
      component: null,
      pulp: pulp.setState({splitSkipped: true}),
      lastNodeY: splitNodeInfo.lastNodeY,
      lastTextNodeY: splitNodeInfo.lastTextNodeY,
      pageOffset: splitNodeInfo.pageOffset,
      isCompleted: true,
    };
  }
}
