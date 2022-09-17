---
sidebar_position: 3
---

# Section Footer

This component will render the children element at the bottom of the last page in the section, It will place after the [PageFooter](../page/page-footer).

<inline-svg width="340px" src="/img/page/section-footer.svg" />

```jsx
<SectionFooter>...</SectionFooter>
```

In order to access to section and page information you can use [usePageInfo](../page/use-page-info) hook.

:::info

If the last page of a section, does not contain enough empty space for the section footer, the layout engine will add an extra page to the section.

:::
