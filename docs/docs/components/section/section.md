---
sidebar_position: 1
---

# Section

A report is divided into sections. Each section contains its own page formatting, like Page number, Header, Footer, Orientation, Size, etc.

The report must contain at least one section.

```jsx
import { pageMargin, pageSize, Section } from "@jikji/react";

<Section
  margin={pageMargin.Narrow}
  dimension={pageSize.A4}
  orientation={"landscape"}
>
  ...ValidComponents...
</Section>;
```

:::caution

Reports with multiple sections with different **dimension**/**orientation** are not supported yet.

:::

## Props

| Name        | Type            | Is Required | Description                          |
| :---------- | :-------------- | :---------: | :----------------------------------- |
| margin      | PageMargin      |     ✅      | Use `pageMargin` for standard values |
| dimension   | PageDimension   |     ✅      | Use `pageSize` for standard values   |
| orientation | PageOrientation |     ❌      | Default: `portrait`                  |

## Types

| Name            | values                                                       | Description                                |
| :-------------- | :----------------------------------------------------------- | :----------------------------------------- |
| PageMargin      | `{top: string; right: string; bottom: string; left: string}` |
| PageDimension   | `{height: string; width: string}`                            | Height and width in `portrait` orientation |
| PageOrientation | 'portrait' \| 'landscape'                                    |                                            |

:::danger

The string values in `PageMargin` and `PageDimension` must contain a number and an acceptable CSS unit, e.g. `300mm`

:::

## Valid Children Components

The `Section` component only accept these component as a children, You can provide them in any order, All of them are optional except the `PageContent`. Passing any other component will cause an **exception**.

1. [SectionHeader](./section-header)
1. [SectionFooter](./section-footer)
1. [PageContent](../page/page-content)<sup>❗Required</sup>
1. [PageHeader](../page/page-header)
1. [PageFooter](../page/page-footer)
1. [PageOverlay](../page/page-overlay)

## Standard Helpers

**pageMargin**: It will provide the Microsoft Word default margins  
**pageSize**: It will provide most of the ISO 216 (e.g. A4, B5) + North American Sizes pages sizes
