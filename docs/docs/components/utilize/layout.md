---
sidebar_position: 4
---

# Layout

This component can be used as a wrapper for any other components and provide a way to customize the layout engine behavior. It will only affect the direct children of it self.

```jsx
<Layout disableSnapshot={true} disableWrap={true}>
  <p>some sample text</p>
</Layout>
```

| Name            | Type    | Is Required | Description                                            |
| :-------------- | :------ | :---------: | :----------------------------------------------------- |
| disableSnapshot | boolean |     ❌      | Default: `false`,[Disable Snapshot](#disable-snapshot) |
| disableWrap     | boolean |     ❌      | Default: `false`, [Disable Wrap](#disable-wrap)        |

## Disable Snapshot

By default, the layout engine creates a Snapshot of your component during the process and will use it in pagination. This behavior causes the component to lose any logic or state. For a report, this behavior must not be problematic but if you need to keep the component logic and state, set `disableSnapshot={true}`, then the layout engine will **try** to use the original component instead of creating a snapshot of it.

The term `Snapshot` does not mean an image. It is simply a dummy version of the react component that returns the same output and style as the original one but doesn't have the same type and, as a result, loses the state.

:::info
The system does not guarantee to use the original component even with `disableSnapshot={true}`. In some cases, like when the component is on the edge of pagination and needs to be broken into two parts to fit the rest of the space on the page, there is no way to use the original component.

To avoid this situation, you can also disable the wrap behavior; the engine starts a new page when finding this component at the edge of a page. Please read the [Disable Wrap](#disable-wrap) documentation to know the risk and limitations.
:::

## Disable Wrap

By default, the layout engine breaks the components when there is not enough space on the page. First, it will try to break the components based on component's children and then break and wrap text lines. Other elements are not breakable and simply will be moved to the next page. In order to avoid this behavior, you can set `disableWrap={true}`; if the target component doesn't fit on a new and empty page, the engine will log the issue as an error and ignore that component.
