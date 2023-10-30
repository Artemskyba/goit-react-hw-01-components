import styled from "styled-components";


export const Title = styled.h2`
  padding: ${p => p.theme.spacing(4)} 0;
  background-color: ${p => p.theme.colors.white};
  text-transform: uppercase;
  text-align: center;`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  padding: ${p => p.theme.spacing(2)};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis:0;
  color: ${p => p.theme.colors.white};
  background-color: ${getRandomHexColor};
  text-shadow: 2px 2px 5px #000;`;

export const StatLabel = styled.span`
  margin-bottom: ${p => p.theme.spacing(2)};
  font-size: ${p => p.theme.spacing(3)};
  text-align: center;`;

export const StatPercenntage = styled.span`
  font-size: ${p => p.theme.spacing(5)};
  text-align: center;`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}