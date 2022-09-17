---
sidebar_position: 6
---

import SectionComponentAlert from "./\_section-component-alert.mdx";
import AvoidDynamicHeightAlert from "./\_avoid-dynamic-height-alert.mdx";

# PageOverlay

This component is responsible for providing a overlay item for page, and will repeat for each page; This component act as as group wrapper and **only** [PageOverlayItem](#pageoverlayitem) can be used as it children.

<inline-svg width="340px" src="/img/page/page-overlay.svg" />

```jsx
<PageOverlay>
  <PageOverlayItem zIndex={-1}>Report watermark</PageOverlayItem>
</PageOverlay>
```

<SectionComponentAlert />
<AvoidDynamicHeightAlert />

## PageOverlayItem

Pages can continues several different overlay items, For each overlay item you need to use `PageOverlayItem` component and provide a proper [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) and desired content as children.

```jsx
<PageOverlayItem zIndex={-1}>Report watermark</PageOverlayItem>
```

| Name   | Type   | Is Required | Description     |
| :----- | :----- | :---------: | :-------------- |
| zIndex | number |     ✅      | z-order of item |
