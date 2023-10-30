import styled from "styled-components";

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(2)} 0;`;

export const Avatar = styled.img`
border: ${p => p.theme.border};
border-radius: 50%;
width: ${p => p.theme.spacing(38)};`;

export const UserName = styled.p`
font-size: ${p => p.theme.spacing(6)};
font-weight:  700;
`;

export const UserInfo = styled.p`
color: ${p => p.theme.colors.gray};
font-size: ${p => p.theme.spacing(4)};`;