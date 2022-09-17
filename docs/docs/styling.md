---
sidebar_position: 4
---

# Styling

The library will only add some inline styles necessary for layout to the some internal components and it must not affect the report itself.

In CSR mode ([CSR vs SSG](./csr-vs-ssg)) in order to handle the report preview, some components come with a static class name. The [ReportView](./components/report/report-view) provide a default CSS style for this purpose.

If you need to customize the preview mode, please check the default CSS file, override the styles or provide your own instance of ReportView component.

:::caution

All styles must be wrapped in `@media screen` in order to limit the styles for preview mode.

:::
