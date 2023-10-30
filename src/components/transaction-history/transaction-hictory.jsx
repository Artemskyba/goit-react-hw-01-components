import styled from "styled-components";
import { Thead } from "./table-header";
import { TableBody } from "./table-body/table-body";

const Table = styled.table`
  margin: 0 auto ${p => p.theme.spacing(8)} auto;
  width: ${p => p.theme.spacing(200)};
  border-collapse: collapse;
  border: 1px solid ${p => p.theme.colors.white};
`;

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <Thead></Thead>
      <TableBody transactions={transactions}></TableBody>
    </Table>
  );
}