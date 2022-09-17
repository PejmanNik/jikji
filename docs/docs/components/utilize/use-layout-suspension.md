---
sidebar_position: 2
---

# useLayoutSuspension

If your component needs to fetch data asynchronously, you need to suspend the layout engine because it will automatically start the parsing process immediately.

For instance, calling an API endpoint as an asynchronous operation, you need to suspend the layout engine until the component receives the response from API and renders it.

```jsx
const key = "static key";
const { release } = useLayoutSuspension(key);
```

The hook accepts a static key as parameter; it is expected that this key not changed even after **mount** and **unmount** the component. So avoid using random values for this key; for instance, in the [Image](./image) component, the key used for calling the hook is the image `src` property.

`useLayoutSuspension` returns a `release` function that must be called after the asynchronous operation gets completed in order to release the suspension.

:::danger

Components will **mount** and **unmount** during the layout process at least two times. In order to have better performance, it is better to use a library like [react-query](https://react-query.tanstack.com/) that cache the API response. So the component only gets the data one time per layout.

This hook only suspends the layout process **once** per **key** regardless of the number of mount and unmount.

:::
