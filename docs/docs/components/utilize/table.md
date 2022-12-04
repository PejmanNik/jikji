---
sidebar_position: 5
---

# Table

This component simulates browser behavior for printing tables, wrap your HTML `table` element with this component, and it will repeat the table header and footer on each page and keep the column width consistent if you use dynamic weight columns.

It must directly wrap the `table` element, and the `table` element must only include the `thead`, `tbody`, `tfoot` elements.

```jsx
<Table>
  <table>
    <thead>
      <tr>
        <th>Column 1</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>row 1</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Column 1 Footer</th>
      </tr>
    </tfoot>
  </table>
</Table>
```
