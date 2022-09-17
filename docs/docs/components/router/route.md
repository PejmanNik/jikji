---
sidebar_position: 2
---

# Route

The Route component assign a path to a report, so you can server multiple reports in one project, All routes must be direct children of [Browser Router](./browser-router).

```jsx
<Route path="report-1" element={<Report1 />} isDefault />
```

| Name      | Type          | Is Required | Description                                        |
| :-------- | :------------ | :---------: | :------------------------------------------------- |
| path      | string        |     ✅      | Route URL path                                     |
| Route     | ComponentType |     ✅      | The represented component (report) by the URL path |
| isDefault | boolean       |     ❌      | Default: `false`                                   |

:::info

If the current URL does not match any route's path, [Browser Router](./browser-router) will use the first Route, which has `isDefault=true`.

:::

## Sample

```jsx
function App() {
  return (
    <ReportView>
      <ReportRoot>
        <BrowserRouter>
          <Route path="report-1" component={Report1} isDefault />
          <Route path="report-2" component={Report2} />
        </BrowserRouter>
      </ReportRoot>
    </ReportView>
  );
}

function Report1() {
  return (
    <Section dimension={pageSize.A6} margin={pageMargin.Narrow}>
      <PageContent>...Content...</PageContent>
    </Section>
  );
}

function Report2() {
  return (
    <Section dimension={pageSize.A5} margin={pageMargin.Narrow}>
      <PageContent>...Content...</PageContent>
    </Section>
  );
}
```
