"use strict";(self.webpackChunk_jikji_website=self.webpackChunk_jikji_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Getting Started","href":"/docs/intro","docId":"intro"},{"type":"link","label":"Generator","href":"/docs/generator","docId":"generator"},{"type":"link","label":"Styling","href":"/docs/styling","docId":"styling"},{"type":"link","label":"Inject Json Data","href":"/docs/inject-json-data","docId":"inject-json-data"},{"type":"link","label":"Plugin","href":"/docs/plugin","docId":"plugin"},{"type":"link","label":"CSR vs SSG","href":"/docs/csr-vs-ssg","docId":"csr-vs-ssg"},{"type":"link","label":"Avoid Dynamic Height","href":"/docs/avoid-dynamic-height","docId":"avoid-dynamic-height"},{"type":"link","label":"Component Snapshot","href":"/docs/component-snapshot","docId":"component-snapshot"},{"type":"category","label":"React Components","collapsible":true,"collapsed":false,"items":[{"type":"category","label":"Report","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Report Root","href":"/docs/components/report/report-root","docId":"components/report/report-root"},{"type":"link","label":"Report View","href":"/docs/components/report/report-view","docId":"components/report/report-view"}]},{"type":"category","label":"Section","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Section","href":"/docs/components/section/","docId":"components/section/section"},{"type":"link","label":"Section Header","href":"/docs/components/section/section-header","docId":"components/section/section-header"},{"type":"link","label":"Section Footer","href":"/docs/components/section/section-footer","docId":"components/section/section-footer"}]},{"type":"category","label":"Page","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"PageHeader","href":"/docs/components/page/page-header","docId":"components/page/page-header"},{"type":"link","label":"PageContent","href":"/docs/components/page/page-content","docId":"components/page/page-content"},{"type":"link","label":"PageFooter","href":"/docs/components/page/page-footer","docId":"components/page/page-footer"},{"type":"link","label":"PageBreak","href":"/docs/components/page/page-break","docId":"components/page/page-break"},{"type":"link","label":"PageOverlay","href":"/docs/components/page/page-overlay","docId":"components/page/page-overlay"},{"type":"link","label":"usePageInfo","href":"/docs/components/page/use-page-info","docId":"components/page/use-page-info"}]},{"type":"category","label":"Router","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Browser Router","href":"/docs/components/router/browser-router","docId":"components/router/browser-router"},{"type":"link","label":"Route","href":"/docs/components/router/route","docId":"components/router/route"}]},{"type":"category","label":"Utilize","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Image","href":"/docs/components/utilize/image","docId":"components/utilize/image"},{"type":"link","label":"useLayoutSuspension","href":"/docs/components/utilize/use-layout-suspension","docId":"components/utilize/use-layout-suspension"},{"type":"link","label":"useFontLoadSuspension","href":"/docs/components/utilize/use-font-load-suspension","docId":"components/utilize/use-font-load-suspension"},{"type":"link","label":"Layout","href":"/docs/components/utilize/layout","docId":"components/utilize/layout"},{"type":"link","label":"Table","href":"/docs/components/utilize/table","docId":"components/utilize/table"}]}]}]},"docs":{"avoid-dynamic-height":{"id":"avoid-dynamic-height","title":"Avoid Dynamic Height","description":"This library uses two-phase rendering to create a report. The first render (it is not visible to the user) uses to get elements\' dimensions and measure layouts; then the layout engine will split the elements based on page sizes and create new components. The second phase will render this new split and paginated components and will add page and section\'s static parts like header and footer.","sidebar":"tutorialSidebar"},"component-snapshot":{"id":"component-snapshot","title":"Component Snapshot","description":"By default, for rendering the children of PageContent the layout engine try to use the original component but in order to split a component into two parts for pagination, a Snapshot of the component will be created. This behavior causes the component to lose any logic or state. For a report, this behavior must not be problematic but if you need to keep the component logic and state, try to separate the stateful component with a minimal render element that is not subject to breaking/splitting between pages.","sidebar":"tutorialSidebar"},"components/page/page-break":{"id":"components/page/page-break","title":"PageBreak","description":"Insert a page break when you want to move to the beginning of the next page in your document. It Must used as direct or indirect children of PageContent.","sidebar":"tutorialSidebar"},"components/page/page-content":{"id":"components/page/page-content","title":"PageContent","description":"This is the main component that must contain the content of the report. The pagination and layout will apply to this component content.","sidebar":"tutorialSidebar"},"components/page/page-footer":{"id":"components/page/page-footer","title":"PageFooter","description":"This component is responsible for providing the content of page\'s footer and will repeat at the end of each page;","sidebar":"tutorialSidebar"},"components/page/page-header":{"id":"components/page/page-header","title":"PageHeader","description":"This component is responsible for providing the content of page\'s header and will repeat at the top of each page;","sidebar":"tutorialSidebar"},"components/page/page-overlay":{"id":"components/page/page-overlay","title":"PageOverlay","description":"This component is responsible for providing a overlay item for page, and will repeat for each page; This component act as as group wrapper and only PageOverlayItem can be used as it children.","sidebar":"tutorialSidebar"},"components/page/use-page-info":{"id":"components/page/use-page-info","title":"usePageInfo","description":"This hook provides helpful information about the current page and section information and gives access to the previous section\'s total page number to create custom pagination over the document.","sidebar":"tutorialSidebar"},"components/report/report-root":{"id":"components/report/report-root","title":"Report Root","description":"It must used as parent component for the report and all other components must appears as a children of it. It will act as a internal state provider for the report system.","sidebar":"tutorialSidebar"},"components/report/report-view":{"id":"components/report/report-view","title":"Report View","description":"This component is meant to be used in CSR only and will provide some default CSS style so that the output will be like the Chrome Print preview style screen.","sidebar":"tutorialSidebar"},"components/router/browser-router":{"id":"components/router/browser-router","title":"Browser Router","description":"In order to serve multiple reports in one React project, you can use this component to separate them by routes. this is only useful for Server side generator. The BrowserRouter must be used as the parent of Route components.","sidebar":"tutorialSidebar"},"components/router/route":{"id":"components/router/route","title":"Route","description":"The Route component assign a path to a report, so you can server multiple reports in one project, All routes must be direct children of Browser Router.","sidebar":"tutorialSidebar"},"components/section/section":{"id":"components/section/section","title":"Section","description":"A report is divided into sections. Each section contains its own page formatting, like Page number, Header, Footer, Orientation, Size, etc.","sidebar":"tutorialSidebar"},"components/section/section-footer":{"id":"components/section/section-footer","title":"Section Footer","description":"This component will render the children element at the bottom of the last page in the section, It will place after the PageFooter.","sidebar":"tutorialSidebar"},"components/section/section-header":{"id":"components/section/section-header","title":"Section Header","description":"This component will render the child element at the top of the first page in the section, It will place before the first page PageHeader.","sidebar":"tutorialSidebar"},"components/utilize/image":{"id":"components/utilize/image","title":"Image","description":"This component uses useLayoutSuspension hook to provide a reliable way to load images in the reports. It will accept all standard properties of the HTML img element. So you can easily replace it with the build-in image component.","sidebar":"tutorialSidebar"},"components/utilize/layout":{"id":"components/utilize/layout","title":"Layout","description":"This component can be used as a wrapper for any other components and provide a way to customize the layout engine behavior. It will only affect the direct children of it self.","sidebar":"tutorialSidebar"},"components/utilize/table":{"id":"components/utilize/table","title":"Table","description":"This component simulates browser behavior for printing tables, replace your HTML table element with this component, and it will repeat the table header and footer on each page and keep the column width consistent if you use dynamic weight columns.","sidebar":"tutorialSidebar"},"components/utilize/use-font-load-suspension":{"id":"components/utilize/use-font-load-suspension","title":"useFontLoadSuspension","description":"This hook uses useLayoutSuspension hook to suspend the layout engine until all fonts are loaded by the browser. If you used a custom font, you need to call this hook under the ReportRoot component at any level.","sidebar":"tutorialSidebar"},"components/utilize/use-layout-suspension":{"id":"components/utilize/use-layout-suspension","title":"useLayoutSuspension","description":"If your component needs to fetch data asynchronously, you need to suspend the layout engine because it will automatically start the parsing process immediately.","sidebar":"tutorialSidebar"},"csr-vs-ssg":{"id":"csr-vs-ssg","title":"CSR vs SSG","description":"Client Side Rendering","sidebar":"tutorialSidebar"},"generator":{"id":"generator","title":"Generator","description":"In order to create reports in the server (Server Side Generator), you can use this library. It requires direct access to your report react static output files or a URL to served versions of it (this project must use the base package @jikji/react). Generator uses Puppeteer to generate report in different format.","sidebar":"tutorialSidebar"},"inject-json-data":{"id":"inject-json-data","title":"Inject Json Data","description":"This feature let you provide a JSON object to the ReportBuilder on the report building process and have access to your data in the react components. in order to use it, you need to wrap the sections with InjectJsonData component and the call useJsonData hook in your component to have access to that data.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Getting Started","description":"Get started by adding the library to your React project.","sidebar":"tutorialSidebar"},"plugin":{"id":"plugin","title":"Plugin","description":"A plugin can customize the layout engine; each plugin can only affect one type of react component. The component property will provide the expected component for this plugin. The library call corresponding property of plugins for each component by order in the building layout tree stage and splitting system stage.","sidebar":"tutorialSidebar"},"styling":{"id":"styling","title":"Styling","description":"The library will only add some inline styles necessary for layout to the some internal components and it must not affect the report itself.","sidebar":"tutorialSidebar"}}}')}}]);