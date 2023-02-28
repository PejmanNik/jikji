import { ReportPlugin } from './engine/plugin';
import log, { LogFlag } from './log';
import { makePulpTree } from './pulp/pulpTree';
import { PulpType } from './pulp/pulpTypes';
import { spreadPulpBetweenPages } from './spreadPulpBetweenPages';

export interface PageAdjustment {
  last?: number;
  every?: number;
  [key: number]: number;
}

export const getAvailableHeight =
  (pageSize: number, pageAdjustments: PageAdjustment) =>
    (pageIndex: number, isLast = false) => {
      return (
        pageSize +
        (pageAdjustments.every ?? 0) +
        (pageAdjustments[pageIndex] ?? 0) +
        (isLast ? pageAdjustments.last ?? 0 : 0)
      );
    };

function splitPageContent(
  contentElement: HTMLDivElement,
  pageAdjustments: PageAdjustment,
  plugins: Readonly<ReportPlugin[]>,
) {
  const pulp = makePulpTree(contentElement, plugins);

  if (pulp.type !== PulpType.Component)
    throw Error(
      'The pulp type is not correct. Please check PageContent component.',
    );

  const pageRect = contentElement.getBoundingClientRect();
  const pageHeight = pageRect.height;

  log.debug('start spread pulp between pages', undefined, [LogFlag.SplitPage]);
  const pages = spreadPulpBetweenPages(
    pulp,
    pageRect.y,
    getAvailableHeight(pageHeight, pageAdjustments),
    plugins,
  );

  return pages;
}

export default splitPageContent;
