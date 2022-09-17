import log, {LogFlag} from 'core/log';
import {Pulp} from 'core/pulp/pulpTypes';
import {ReactElement} from 'react';
import {splitByPulpType} from './splitByPulpType';
import {BaseSplitResult, SplitPulpInfo} from './splitTypes';

export interface SplitPulpsResult extends BaseSplitResult {
  components: (ReactElement | string | number)[];
  pulps: Array<Pulp | null>;
}

export function splitPulps(
  splitNodeInfo: SplitPulpInfo,
  pulpNodes: Pulp[],
): SplitPulpsResult {
  const components: (ReactElement | string | number)[] = [];
  const pulps: Array<Pulp | null> = [];

  let isCompleted = false;
  let lastNodeY = splitNodeInfo.lastNodeY;
  let lastTextNodeY = splitNodeInfo.lastTextNodeY;
  let pageOffset = splitNodeInfo.pageOffset;

  for (let i = 0; i < pulpNodes.length; i++) {
    const pulp = pulpNodes[i];

    // prettier-ignore
    log.debug(`split pulps level ${splitNodeInfo.level} - index ${i}`, {pulp, isCompleted, pulpNodes}, [LogFlag.SplitElement ]);

    if (isCompleted) {
      break;
    }

    const result = splitByPulpType(
      {
        ...splitNodeInfo,
        lastNodeY,
        pageOffset,
      },
      pulp,
    );

    pulps.push(result.pulp);
    if (result.component) components.push(result.component);

    lastNodeY = result.lastNodeY;
    lastTextNodeY = result.lastTextNodeY;
    pageOffset = result.pageOffset;
    isCompleted = isCompleted || result.isCompleted;
  }

  return {
    components,
    pulps,
    lastNodeY,
    lastTextNodeY,
    pageOffset,
    isCompleted,
  };
}
