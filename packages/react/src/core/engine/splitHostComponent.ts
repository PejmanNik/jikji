import log, {LogFlag} from 'core/log';
import {HostComponentPulp} from 'core/pulp/HostComponentPulp';
import {Pulp, PulpType} from 'core/pulp/pulpTypes';
import {ReactElement} from 'react';
import {splitComponentByRendered} from './componentShared';
import {SplitPulpInfo, SplitPulpResult} from './splitTypes';

export function splitHostComponent(
  splitNodeInfo: SplitPulpInfo,
  pulp: HostComponentPulp,
): SplitPulpResult {
  let component: ReactElement | string | number | null = null;
  let resultPulp: Pulp | null = null;
  let isCompleted = false;
  let lastNodeY = splitNodeInfo.lastNodeY;
  let lastTextNodeY = splitNodeInfo.lastTextNodeY;
  let pageOffset = splitNodeInfo.pageOffset;

  const {fullHeight, marginBottom, marginTop, offset} =
    pulp.getHeightInfo(splitNodeInfo.rootPulp);

  const nodeEndY = pulp.nodeY + fullHeight;

  // is there enough space for this component on the page?
  if (
    nodeEndY <= splitNodeInfo.pageEndY - pageOffset &&
    !pulp.state.isForceToVisit
  ) {
    component = pulp.component;
    lastNodeY = nodeEndY;

    const lastChild = pulp.rendered?.at(-1);
    if (lastChild?.type === PulpType.HostText) {
      lastTextNodeY = lastChild.linesInfo.at(-1)?.endY ?? 0;
    }

    pageOffset += offset.element;

    // prettier-ignore
    log.debug('use entire HostComponentPulp', {id: pulp.id, splitNodeInfo, pulp, fullHeight, lastNodeY, pageOffset, marginTop, marginBottom}, [LogFlag.SplitElement]);
  } else {
    // try to split the HostComponentPulp

    // does component return any new component that we can split &&
    // is there any space left at all on the page
    if (pulp.rendered && splitNodeInfo.pageEndY - lastNodeY - pageOffset > 0) {
      const splitPageOffset = pageOffset + offset.split;

      // prettier-ignore
      log.debug('split HostComponentPulp - before', {id: pulp.id, level: splitNodeInfo.level, isForceToVisit: pulp.state.isForceToVisit, pulp, lastNodeY, lastTextNodeY, marginTop, marginBottom, offset, pageOffset, splitPageOffset, component}, [LogFlag.SplitElement]);

      const splitResult = splitComponentByRendered(
        {...splitNodeInfo, pageOffset: splitPageOffset},
        pulp,
      );

      component = splitResult.component;
      resultPulp = splitResult.pulp;
      lastNodeY = splitResult.lastNodeY;
      lastTextNodeY = splitResult.lastTextNodeY;
      pageOffset += splitResult.pageOffset;
      isCompleted = splitResult.isCompleted;

      // prettier-ignore
      log.debug('split HostComponentPulp - after',{id: pulp.id, level: splitNodeInfo.level, isForceToVisit: pulp.state.isForceToVisit, pulp: resultPulp, lastNodeY, lastTextNodeY, marginTop, marginBottom, offset, pageOffset, component}, [LogFlag.SplitElement]);
    } else {
      if (!pulp.rendered && nodeEndY > splitNodeInfo.pageEndY) {
        // prettier-ignore
        log.error(`HostComponentPulp ${pulp.id} is not breakable and it is bigger than the page size.`, {pulp});
      }

      resultPulp = pulp;
      isCompleted = true;

      // prettier-ignore
      log.debug('skip HostComponentPulp', {id: pulp.id, pulp}, [LogFlag.SplitElement]);
    }
  }

  if (
    component === null &&
    resultPulp instanceof HostComponentPulp &&
    !resultPulp.state.isSplitted
  ) {
    resultPulp = resultPulp.updateMargins(splitNodeInfo.rootPulp);
  }

  return {
    component,
    pulp: resultPulp,
    lastNodeY,
    lastTextNodeY,
    pageOffset,
    isCompleted,
  };
}
