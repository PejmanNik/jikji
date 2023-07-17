---
sidebar_position: 11
---

# Component Snapshot

By default, for rendering the children of `PageContent` the layout engine **try** to use the original component but in order to split a component into two parts for pagination, a Snapshot of the component will be created. This behavior causes the component to lose any logic or state. For a report, this behavior must not be problematic but if you need to keep the component logic and state, try to separate the stateful component with a minimal render element that is not subject to breaking/splitting between pages.

The term `Snapshot` does not mean an image. It is simply a dummy version of the react component that returns the same output and style as the original one but doesn't have the same type and, as a result, loses the state.

<inline-svg width="700px" src="/img/component-snapshot.svg" />

```ts

function ComponentX()
{
    const value = useSomeHook();
    const margin = 1 * 10;

    return <p style={{marginTop: `${margin}px`}}>
        LONG LINE 1
        LONG LINE 2
        LONG LINE 3
        SHORT LINE 4 + {value}
    </p>
}
```

will be converted two:

```ts

function ComponentXFragment1()
{
    return <p style={{marginTop: `10px`}}>
        LONG LINE 1
        LONG LINE 2
    </p>
}

function ComponentXFragment2()
{
    return <p style={{marginTop: `10px`}}>
        LONG LINE 3
        SHORT LINE 4 + SOME VALUE
    </p>
}
```