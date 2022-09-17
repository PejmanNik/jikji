---
sidebar_position: 5
---

# Inject Json Data

This feature let you provide a JSON object to the [ReportBuilder](./generator/) on the report building process and have access to your data in the react components. in order to use it, you need to wrap the sections with [InjectJsonData](#provider) component and the call `useJsonData` hook in your component to have access to that data.

:::caution

This feature is only supported in SSG mode and will raise an exception in CSR ([CSR vs SSG](./csr-vs-ssg)).

:::

## Provider

Provider component `InjectJsonData` reads the file data, convert it to JSON, and injects the data into all consumer components that appear as children of it.

As recommendation, You can put this component as a direct children of `ReportRoot` component.

```jsx
const jsonData: JsonModel = {
  title: "Test injection 💉",
};

<InjectJsonData defaultValue={jsonData}>...</InjectJsonData>;
```

### Props

| Name         | Type    | Is Required | Description                                                                 |
| :----------- | :------ | :---------: | :-------------------------------------------------------------------------- |
| defaultValue | unknown |     ❌      | For debugging purposes, Used when the app is not in SSG mode, Default: null |

## Consumer

For using the injected data, call the `useJsonData` hook. It accepts only one generic type and will return the data with that type.

```jsx
const data:T = useJsonData<T>();
```

:::danger

`useJsonData` hook is **not** type-safe. you must manually take care of the compatibility of your JSON file with the provided generic type (`T`) to this hook.

:::

## Sample

```jsx
interface JsonModel {
  title: string;
  table: { index: number, caption: string }[];
}

const jsonData: JsonModel = {
  title: "Test injection 💉",
  table: [
    { index: 1, caption: "data" },
    { index: 2, caption: "more data" },
  ],
};

function AwesomeData()
{
  const data = useJsonData<JsonModel>();

  return <div>
      <h1>{data.title}</h1>
  </div>
}

<ReportRoot>
  <InjectJsonData defaultValue={jsonData}>
    <Section>
      <PageContent>
        <AwesomeData />
      </PageContent>
    </Section>
  </InjectJsonData>
</ReportRoot>;
```
