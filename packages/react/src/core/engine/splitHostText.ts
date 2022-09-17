import log, {LogFlag} from 'core/log';
import {HostTextPulp} from 'core/pulp/HostTextPulp';
import {Pulp} from 'core/pulp/pulpTypes';
import {LineInfo} from 'core/textNodeParser';
import {SplitPulpInfo, SplitPulpResult} from './splitTypes';

/*
 *                │           │
 *  xxxxxxxxxx    │xxxxxxxxxxx│
 *  yyyyyyyyyy -> │yyyyyyyyyyy│
 *  zzzzzzzzzz    └───────────┘
 */
function getFitLines(
  pageEndY: number,
  linesInfo: LineInfo[],
  isOverlapped: boolean,
) {
  const result: LineInfo[] = [];

  let availableLinesInfo = linesInfo;
  if (isOverlapped) {
    result.push(linesInfo[0]);
    availableLinesInfo = availableLinesInfo.slice(1);
  }

  for (const lineInfo of availableLinesInfo) {
    if (pageEndY < lineInfo.endY) {
      break;
    }
    result.push(lineInfo);
  }

  return result;
}

/*
 * │          │  │          │  │      yyyy│
 * │          │  │xxxxx     │  │xxxxxxyyyy│
 * │xxxxxyyyyy│  │xxxxxyyyyy│  │xxxxxxyyyy│
 * │yyyyyyyyyy│  │xxxxxyyyyy│  │xxxxxx    │
 * └──────────┘  └──────────┘  └──────────┘
 */
export function comparePosition(
  lastNodeY: number,
  currentNodeY: number,
  currentNodeHeight: number,
) {
  return {
    haveSameY: lastNodeY > currentNodeY,
    startBeforeLastNodeEnds: lastNodeY - currentNodeY >= 2,
    endBeforeLastNodeEnds:
      currentNodeY > lastNodeY && lastNodeY >= currentNodeY + currentNodeHeight,
  };
}

export function splitHostText(
  splitNodeInfo: SplitPulpInfo,
  pulp: HostTextPulp,
): SplitPulpResult {
  let resultPulp: Pulp | null = null;
  let component: string | number | null = null;
  let isCompleted = false;
  let lastNodeY = splitNodeInfo.lastNodeY;
  let lastTextNodeY = splitNodeInfo.lastTextNodeY;
  const nodeEndY = pulp.nodeY + pulp.height;

  // is there enough space for this component on the page?
  if (nodeEndY + splitNodeInfo.pageOffset <= splitNodeInfo.pageEndY) {
    component = pulp.text;
    lastNodeY = pulp.nodeY + pulp.height;
    lastTextNodeY = pulp.linesInfo.at(-1)?.endY ?? lastNodeY;

    // prettier-ignore
    log.debug('uae entire HostTextPulp',{text: pulp.text, pulp: pulp, lastNodeY, lastTextNodeY, pageOffset: splitNodeInfo.pageOffset}, [LogFlag.SplitElement]);
  } else {
    // try to split the text by lines
    const linePosition = comparePosition(lastTextNodeY, pulp.nodeY, 0);
    const isOverlapped =
      linePosition.haveSameY || linePosition.startBeforeLastNodeEnds;

    const fitLines = getFitLines(
      splitNodeInfo.pageEndY - splitNodeInfo.pageOffset,
      pulp.linesInfo,
      isOverlapped,
    );

    if (fitLines.length > 0) {
      // split the component

      const height = fitLines.reduce((sum, x) => (sum += x.height), 0);
      lastNodeY = pulp.nodeY + height;
      lastTextNodeY = fitLines.at(-1)?.endY ?? lastNodeY;
      isCompleted = true;

      const splitResult = pulp.split(fitLines);
      resultPulp = splitResult.pulp;
      component = splitResult.component;

      // prettier-ignore
      log.debug('split HostTextPulp', {pulp, resultPulp, lines: {lastAvailableY: splitNodeInfo.pageEndY - splitNodeInfo.pageOffset,   linesInfo: pulp.linesInfo, fitLines, linePosition}, component, lastNodeY, lastTextNodeY, pageOffset: splitNodeInfo.pageOffset}, [LogFlag.SplitElement]);
    } else {
      resultPulp = pulp;
      isCompleted = true;

      // prettier-ignore
      log.debug('skip HostTextPulp', {pulp, fitLines, linePosition, text: pulp.text, lastNodeY, pageOffset: splitNodeInfo.pageOffset}, [LogFlag.SplitElement]);
    }
  }

  return {
    component,
    pulp: resultPulp,
    lastNodeY,
    lastTextNodeY,
    pageOffset: splitNodeInfo.pageOffset,
    isCompleted,
  };
}
