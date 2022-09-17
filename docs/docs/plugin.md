---
sidebar_position: 9
---

# Plugin

A plugin can customize the layout engine; each plugin can only affect one type of react component. The `component` property will provide the expected component for this plugin. The library call corresponding property of plugins for each component by order in the building layout tree stage and splitting system stage.

:::info

This is a very advanced and core topic for this library, and there is a slight chance that you are going to need it. The document is very shallow and straightforward, so you need to check the source code. Some interior features of the library use plugin to work. For instance, you can check `Layout` or `PageBreak` component.

:::

```jsx
import { Plugin } from "@jikji/react";

export function Awesome()
{
    return <div>Awesome Component</div>;
}

export const awesomePlugin: Plugin = {
  order: 0,
  component: Awesome;
  build: (pulp) => {
    ...
  };
  split: ( splitNodeInfo, pulp) => {
    ...
  }
};
```

## Properties

| Name      | Type              | Is Required | Description                                                  |
| :-------- | :---------------- | :---------: | :----------------------------------------------------------- |
| order     | number            |     ❌      | The order for applying plugin over one component, Default: 0 |
| component | React.ElementType |     ✅      | React component that this plugin will be applied on it       |
| build     | boolean           |     ❌      | Use it for overwriting the pulp building logic               |
| split     | boolean           |     ❌      | Use it for overwriting the pulp splitting logic              |

A Pulp ([pulp](<https://en.wikipedia.org/wiki/Pulp_(paper)>) is the major raw material used in papermaking) is a transformed object from [React Fiber](https://github.com/acdlite/react-fiber-architecture) and is the core model behind this library. Pulps make the pages and have the ability to split into two parts.

The `Pulp` represent `HostTextPulp` (string or number component) or `HostComponentPulp` (native HTML elements) or `ComponentPulp` (React components) class. All Pulp implementations are immutable, and you need to create a new instance in order to update it
