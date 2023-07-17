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
| disableWrap     | boolean |     ❌      | Default: `false`, [Disable Wrap](#disable-wrap)        |


## Disable Wrap

By default, the layout engine breaks the components when there is not enough space on the page. First, it will try to break the components based on component's children and then break and wrap text lines. Other elements are not breakable and simply will be moved to the next page. In order to avoid this behavior, you can set `disableWrap={true}`; if the target component doesn't fit on a new and empty page, the engine will log the issue as an error and ignore that component.
