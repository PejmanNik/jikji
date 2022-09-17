---
sidebar_position: 1
---

# Browser Router

In order to serve multiple reports in one React project, you can use this component to separate them by routes. this is only useful for [Server side generator](../../generator). The `BrowserRouter` must be used as the parent of [Route](./route) components.

Only one instance of it must be used, and the suggested place for it is before the [Section](../section) component. please check the [sample](./route?#sample) usage at the end of [Route](./route) component documentation.

```jsx
<BrowserRouter>
    <Route ... />
    <Route ... />
    <Route ... />
</BrowserRouter>
```
