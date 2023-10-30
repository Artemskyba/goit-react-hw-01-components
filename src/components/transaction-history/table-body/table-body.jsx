import { TableRow, TableRowData } from "./table-body.styled";

const TableRowItem = ({transactions}) => {
  return (transactions.map(({ id, type, amount,currency}) => {
    return (
      <TableRow key={id}>
        <TableRowData>{type}</TableRowData>
        <TableRowData>{amount}</TableRowData>
        <TableRowData>{currency}</TableRowData>
      </TableRow>
    );
  }));
}

export const TableBody = ({transactions}) => {
  return (
    <tbody>
      <TableRowItem transactions={transactions}></TableRowItem>
    </tbody>
  );
}

