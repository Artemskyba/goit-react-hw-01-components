import styled from "styled-components";

const TableHeader = styled.th`
  width: calc(100% /3);
  padding: ${p => p.theme.spacing(4)};
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.blue};
  border-right: 1px solid ${p => p.theme.colors.white};`;

export const Thead = () => {
  return (
  <thead>
    <tr>
      <TableHeader>Type</TableHeader>
      <TableHeader>Amount</TableHeader>
      <TableHeader>Currency</TableHeader>
    </tr>
  </thead>
  );
}


