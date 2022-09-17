export {default as ReportRoot, ReportRootProps} from './components/ReportRoot';
export {default as ReportView} from './components/ReportView';
export {
  default as InjectJsonData,
  InjectJsonDataProp,
} from './components/InjectJsonData';

export {default as Section, SectionProps} from './components/Section';
export {default as SectionHeader} from './components/SectionHeader';
export {default as SectionFooter} from './components/SectionFooter';

export {default as Image} from './components/Image';

export {default as PageBreak} from './components/PageBreak';
export {default as PageContent} from './components/PageContent';
export {default as PageHeader} from './components/PageHeader';
export {default as PageFooter} from './components/PageFooter';
export {default as PageOverlayItem, PageOverlayItemProps} from './components/PageOverlayItem';
export {
  default as PageOverlay,
  PageOverlayProps,
} from './components/PageOverlay';
//export {default as PageStatic} from './components/PageStatic';

export {default as usePageInfo} from './components/usePageInfo';
export type {SectionPageInfo} from './components/Section/state';

export {default as Layout, LayoutProps} from './components/Layout';
export type {LayoutOptions} from './components/Layout/LayoutComponentPulp';

export {default as useLayoutSuspension} from './components/useLayoutSuspension';
export {default as useJsonData} from './components/useJsonData';
export {default as useFontLoadSuspension} from './components/useFontLoadSuspension';

export {
  default as BrowserRouter,
  BrowserRouterProps,
} from './components/Router/BrowserRouter';
export {default as Route, RouteProps} from './components/Router/Route';

export {pageSize, pageMargin} from './core/pageConst';
export type {PageDimension, PageOrientation, PageMargin} from './core/pageType';

import * as core from './index-core';
export {core};
