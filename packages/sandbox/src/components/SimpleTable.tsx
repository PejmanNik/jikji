import { Table } from "@jikji/react";

function SimpleTable() {

  return (
    <Table style={{ border: 'solid 2px' }}>
      <thead>
        <tr>
          <th style={{ width: '180px' }} align="left">Company Header</th>
          <th >Contact Header</th>
          <th>Country Header</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(50).keys()].map((i) => (
          <tr key={i}>
            <td>Company {i > 30 ? i * 900000 : i * 90}</td>
            <td>Contact {i > 30 ? i * 700000 : i * 70}</td>
            <td>Country {i}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Company Footer</th>
          <th>Contact Footer</th>
          <th>Country Footer</th>
        </tr>
      </tfoot>
    </Table>
  );
}

export default SimpleTable;
