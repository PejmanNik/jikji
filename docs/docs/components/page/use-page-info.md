---
sidebar_position: 9
---

# usePageInfo

This hook provides helpful information about the current page and section information and gives access to the previous section's total page number to create custom pagination over the document.

The `usePageInfo` hook can be use in any level of JSX hierarchy as long as it is indirect/direct child of one of the **Page...** components like [PageHeader](./page-header) or [PageContent](./page-content.md).

```js
const {
  pageNumber,
  totalPages,
  pageDimension,
  pageMargin,
  getSectionTotalPages,
  getPreviousSectionTotalPages,
} = usePageInfo();
```

| Name                         | Type                               | Description                                                                                |
| :--------------------------- | :--------------------------------- | :----------------------------------------------------------------------------------------- |
| pageNumber                   | number                             | start from one                                                                             |
| totalPages                   | number                             | total page number in the current section                                                   |
| pageDimension                | [PageMargin](../section/#types)    | It can be different from what you passed to [Section](../section) component                |
| pageMargin                   | [PageDimension](../section/#types) | It can be different from what you passed to [Section](../section) component                |
| getSectionTotalPages         | (sectionId: number) => number      | function take the section id and return total page number on that section,                 |
| getPreviousSectionTotalPages | (backwardIndex: number) => number  | take a number like **n** and return the total page number of the **nth** previous section. |
