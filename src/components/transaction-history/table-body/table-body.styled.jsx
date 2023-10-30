import styled from "styled-components";

export const TableRow = styled.tr`
  background-color: ${p => p.theme.colors.white};

  &:nth-child(odd) {
    background-color: ${p => p.theme.colors.midleGray};
  }
  `;

export const TableRowData = styled.td`
  padding: ${p => p.theme.spacing(4)};
  text-align: center;
  border-right: 1px solid ${p => p.theme.colors.white};

  &:nth-child(1) {
    text-transform: capitalize;
  };
    `;
