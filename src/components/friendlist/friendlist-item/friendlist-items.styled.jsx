import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};
  gap: ${p => p.theme.spacing(1.5)};
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadow};
`;

export const Status = styled.span`
  width: ${p => p.theme.spacing(3)};
  height: ${p => p.theme.spacing(3)};
  border-radius: 50%;
  background-color: ${p => p.$isOnline ? p.theme.colors.green : p.theme.colors.red};
`;

export const Avatar = styled.img`
  width: ${p => p.theme.spacing(12)};`;

export const UserName = styled.p`
  font-size: ${p => p.theme.spacing(5)};
  font-weight: 500;
  font-style: italic;
`;