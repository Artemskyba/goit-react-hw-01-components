import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto ${p => p.theme.spacing(8)} auto;
  width: ${p => p.theme.spacing(60)};
  gap: ${p => p.theme.spacing(3)};
`;

