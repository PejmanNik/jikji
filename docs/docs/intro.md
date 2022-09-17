---
sidebar_position: 1
---

# Getting Started

Get started by adding the library to your React project.

```shell
yarn add @jikji/react
```
Or
```shell
npm install @jikji/react
```

Create your awesome report by adding the [ReportRoot](components/report/report-root) and then [Section](components/section) component. Check the component list for a detail list of available components.

```ts
import {
  PageContent,
  PageFooter,
  PageHeader,
  pageMargin,
  pageSize,
  ReportRoot,
  ReportView,
  Section,
  SectionFooter,
  SectionHeader,
} from "@jikji/react";

function MyReport() {
  return (
    <ReportRoot>
      <ReportView>
        <Section dimension={pageSize.A4} margin={pageMargin.Narrow}>
          <SectionHeader>Section Header</SectionHeader>
          <SectionFooter>Section Footer</SectionFooter>
          <PageHeader>Page Header</PageHeader>
          <PageContent> Report Content </PageContent>
          <PageFooter>Page Footer</PageFooter>
        </Section>
      </ReportView>
    </ReportRoot>
  );
}

export default MyReport;
```

Jikji support two mode for creating reports. Client side rendering and server side generation. Each on come with a own benefit and limitation. You can read about each version in [CSR vs SSG](./csr-vs-ssg).

This library uses two-phase rendering to create a report, Each component will mount two times, it is important to remember your component's dimensions **MUST NOT** changed during this two phase, consider enough space if you have dynamic contents (like page number or date-time). More detail in [Avoid Dynamic Height](./avoid-dynamic-height.md).
