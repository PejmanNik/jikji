import {Pulp} from './pulpTypes';

function notNullPulps(pulps: Pulp | null): pulps is Pulp {
  return pulps != null;
}

export function createAlternateRendered(
  newPulps: Array<Pulp | null>,
  currentPulps: Pulp[] | null,
) {
  const notSplittedRendered = currentPulps?.slice(newPulps.length) ?? [];
  const partialSplittedRendered = newPulps.filter(notNullPulps);
  return [...partialSplittedRendered, ...notSplittedRendered];
}
