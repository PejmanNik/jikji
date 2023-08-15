import { PageDimension, PageMargin } from './pageType';

const _pageSize = {
  A1: { height: '841mm', width: '594mm' },
  A2: { height: '594mm', width: '420mm' },
  A3: { height: '420mm', width: '297mm' },
  A4: { height: '297mm', width: '210mm' },
  A5: { height: '210mm', width: '148mm' },
  A6: { height: '148mm', width: '105mm' },
  B3: { height: '500mm', width: '353mm' },
  B4: { height: '353mm', width: '250mm' },
  B5: { height: '250mm', width: '176mm' },
  Letter: { height: '8.5in', width: '11in' },
  Legal: { height: '11in', width: '8.5in' },
  Tabloid: { height: '11in', width: '17in' },
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
