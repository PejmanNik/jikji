import { PageDimension, PageMargin } from './pageType';

// the height is not based on the size specification, it has been decreased
// by 0.2 due to the last version of the chromium issue in printing as PDF
const _pageSize = {
  A1: { height: '840.8mm', width: '594mm' },
  A2: { height: '593.8mm', width: '420mm' },
  A3: { height: '419.8mm', width: '297mm' },
  A4: { height: '296.8mm', width: '210mm' },
  A5: { height: '209.8mm', width: '148mm' },
  A6: { height: '147.8mm', width: '105mm' },
  B3: { height: '499.8mm', width: '353mm' },
  B4: { height: '352.8mm', width: '250mm' },
  B5: { height: '249.8mm', width: '176mm' },
  Letter: { height: '275.8mm', width: '216mm' },
  Legal: { height: '364.8mm', width: '216mm' },
  Tabloid: { height: '431.8mm', width: '279mm' },
};

const _pageMargin = {
  Normal: { top: '1in', right: '1in', bottom: '1in', left: '1in' },
  Narrow: { top: '0.4in', right: '0.6in', bottom: '0.6in', left: '0.6in' },
  Wide: { top: '0.5in', right: '2in', bottom: '0.5in', left: '2in' },
  None: { top: '0in', right: '0in', bottom: '0in', left: '0in' },
};

export const pageSize = _pageSize as Record<
  keyof typeof _pageSize,
  PageDimension
>;

export const pageMargin = _pageMargin as Record<
  keyof typeof _pageMargin,
  PageMargin
>;
