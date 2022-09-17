import {ReactElement} from 'react';
import {ComponentPulp} from 'core/pulp/ComponentPulp';
import {HostComponentPulp} from 'core/pulp/HostComponentPulp';
import {SplitPulp} from 'core/pulp/pulpTypes';
import {splitPulps, SplitPulpsResult} from './splitPulps';
import {SplitPulpInfo, SplitPulpResult} from './splitTypes';
import log, {LogFlag} from 'core/log';

export interface SplitComponentResult extends SplitPulpResult {
  component: ReactElement | string | number | null;
}

// componentPulp and HostComponentPulp split function has different signature
export function callSplitOnPulpComponent(
  splitResult: SplitPulpsResult,
  pulp: ComponentPulp | HostComponentPulp,
): SplitPulp<ReactElement | string | number> {
  log.debug('call pulp split method', {pulp}, [LogFlag.SplitElement]);
  if (pulp instanceof ComponentPulp) {
    return pulp.split(splitResult.pulps, splitResult.components);
  } else {
    return pulp.split(
      splitResult.lastNodeY,
      splitResult.pulps,
      splitResult.components,
    );
  }
}

function handleSplitResult(
  splitResult: SplitPulpsResult,
  pulp: ComponentPulp | HostComponentPulp,
): SplitPulp<ReactElement | string | number> {
  if (splitResult.components.length > 0) {
    return callSplitOnPulpComponent(splitResult, pulp);
  }

  return {
    component: null,
    pulp,
  };
}

// split a component based on the result of
// component render function and page available size
export function splitComponentByRendered(
  splitNodeInfo: SplitPulpInfo,
  pulp: ComponentPulp | HostComponentPulp,
): SplitPulpResult {
  const rendered = pulp.rendered;
  if (!rendered) {
    throw Error('There is no rendered for this pulp to split');
  }

  // prettier-ignore
  log.debug('split pulp -> level down', {pulp, level: splitNodeInfo.level, rendered}, [LogFlag.DerivationTree]);

  // split the component rendered (result of render function)
  const splitResult = splitPulps(
    {...splitNodeInfo, rootPulp: pulp, level: splitNodeInfo.level + 1},
    rendered,
  );

  // prettier-ignore
  log.debug('split pulp -> level up', {pulp, level: splitNodeInfo.level, splitResult}, [LogFlag.DerivationTree]);

  const {component, pulp: resultPulp} = handleSplitResult(splitResult, pulp);

  // prettier-ignore
  log.debug('split result', {pulp: resultPulp, component,level: splitNodeInfo.level}, [LogFlag.SplitElement]);

  return {
    component,
    pulp: resultPulp,
    lastNodeY: splitResult.lastNodeY,
    lastTextNodeY: splitResult.lastTextNodeY,
    pageOffset: splitResult.pageOffset,
    isCompleted: splitResult.isCompleted,
  };
}
