export { default as ReportView } from './components/ReportView';
export { default as InjectJsonData } from './components/InjectJsonData';
export type { InjectJsonDataProp } from './components/InjectJsonData';

export { default as Section } from './components/Section';
export type { SectionProps } from './components/Section';
export { default as SectionHeader } from './components/SectionHeader';
export { default as SectionFooter } from './components/SectionFooter';

export { default as Image } from './components/Image';

export { default as PageBreak } from './components/PageBreak';
export { default as PageContent } from './components/PageContent';
export { default as PageHeader } from './components/PageHeader';
export { default as PageFooter } from './components/PageFooter';
//export {default as PageStatic} from './components/PageStatic';

export { default as PageOverlayItem } from './components/PageOverlayItem';
export type { PageOverlayItemProps } from './components/PageOverlayItem';

export { default as PageOverlay } from './components/PageOverlay';
export type { PageOverlayProps } from './components/PageOverlay';

export { default as usePageInfo } from './components/usePageInfo';
export type { SectionPageInfo } from './components/Section/state';

export { default as Layout } from './components/Layout';
export type { LayoutProps } from './components/Layout';
export type { LayoutOptions } from './components/Layout/LayoutComponentPulp';

export { default as useLayoutSuspension } from './components/useLayoutSuspension';
export { default as useJsonData } from './components/useJsonData';
export { default as useFontLoadSuspension } from './components/useFontLoadSuspension';

export { default as ReportRoot } from './components/ReportRoot';
export type { ReportRootProps } from './components/ReportRoot';
export { default as BrowserRouter } from './components/Router/BrowserRouter';
export type { BrowserRouterProps } from './components/Router/BrowserRouter';
export { default as Route } from './components/Router/Route';
export type { RouteProps } from './components/Router/Route';

export { default as Table } from './components/Table';
export type { TableProps } from './components/Table';

export { pageSize, pageMargin } from './core/pageConst';
export type { PageDimension, PageOrientation, PageMargin } from './core/pageType';

import * as core from './index-core';
export { core };
