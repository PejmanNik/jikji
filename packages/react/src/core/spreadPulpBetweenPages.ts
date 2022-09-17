import {ReactElement} from 'react';
import log, {LogFlag} from './log';
import {ComponentPulp} from './pulp/ComponentPulp';
import {Pulp} from './pulp/pulpTypes';
import {ReportPlugin} from './engine/plugin';
import {splitByPulpType} from './engine/splitByPulpType';

const MaxLoopIndex = 5000;

export function spreadPulpBetweenPages(
  pulp: ComponentPulp,
  pageY: number,
  pageHeightFnc: (pageIndex: number, isLast?: boolean) => number,
  plugins: Readonly<ReportPlugin[]>,
): Array<(ReactElement | string | number)[]> {
  const pages: (ReactElement | string | number)[][] = [];
  let activePage: (ReactElement | string | number)[] = [];
  let filedHeight = 0;
  let lastNodeY = pageY;
  let lastTextNodeY = 0;

  let loopIndex = 0;

  if (!pulp.rendered) {
    // throw Error("The PageContent don't have any children.");
    return [];
  }

  let resultPulp: Pulp | null = pulp;
  while (loopIndex < MaxLoopIndex && resultPulp) {
    loopIndex++;

    const pageHeight = pageHeightFnc(pages.length);
    const pageStartY = lastNodeY;
    const pageEndY = pageStartY + pageHeight;

    // prettier-ignore
    log.debug(`layout page ${pages.length} pulps`, {pulp: resultPulp, index: pages.length, pageHeight, pageEndY, pageStartY, filedHeight }, [LogFlag.SplitPage]);

    // reset pageOffset per page
    const splitResult = splitByPulpType(
      {
        components: [],
        rootPulp: pulp,
        level: 1,
        pageEndY,
        lastNodeY,
        lastTextNodeY,
        pageOffset: 0,
        plugins,
      },
      resultPulp,
    );

    // prettier-ignore
    log.debug(`page ${pages.length} layout result`, {pulp: resultPulp, lastNodeInPageY: splitResult.pageOffset, component: splitResult.component}, [LogFlag.SplitPage]);

    resultPulp = splitResult.pulp;
    lastNodeY = splitResult.lastNodeY;
    lastTextNodeY = splitResult.lastTextNodeY;

    if (splitResult.component == null) {
      throw new Error('The split result component is empty.');
    }

    activePage.push(splitResult.component);
    filedHeight += lastNodeY - pageStartY;

    if (splitResult.isCompleted) {
      pages.push(activePage);
      activePage = [];
      filedHeight = 0;
    }
  }

  // Add all remaining component (because of an unfinished page) to a new page
  if (activePage.length > 0) {
    pages.push(activePage);
  }

  // We can't know this is the last page until this point,
  // so will check the specified height for the last page and
  // add extra empty page if there is not enough space to satisfy
  // the requirement height. this usually happen when there is section footer
  if (filedHeight > pageHeightFnc(pages.length, true)) {
    // prettier-ignore
    log.debug('there is no space on the last page for the section footer, add new empty page', undefined, [LogFlag.SplitPage]);

    pages.push(['']);
  }

  if (loopIndex === MaxLoopIndex) {
    throw Error('infinite loop in split pages.');
  }

  return pages;
}
