---
sidebar_position: 3
---

# useFontLoadSuspension

This hook uses [useLayoutSuspension](./use-layout-suspension) hook to suspend the layout engine until all fonts are loaded by the browser. If you used a custom font, you need to call this hook under the [ReportRoot](../report/report-root) component at any level.
