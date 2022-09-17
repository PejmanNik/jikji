---
sidebar_position: 1
---

# Report Root

It **must** used as parent component for the report and all other components must appears as a children of it. It will act as a internal state provider for the report system.

```jsx
import { ReportRoot } from "Jikji";

<ReportRoot
  plugins={[...plugins...]}
>
  ...Children...
</ReportRoot>;
```

## Props

| Name    | Type     | Is Required | Description                                           |
| :------ | :------- | :---------: | :---------------------------------------------------- |
| plugins | Plugin[] |     ❌      | List of custom [plugins](../../plugin), Default: null |
