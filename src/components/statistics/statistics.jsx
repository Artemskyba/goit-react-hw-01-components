import styled from "styled-components";
import { StatsList, Title } from "./statistics.styled";
import { ListItems } from "./list-items";

const StatisticsWrapper = styled.section`
  margin: 0 auto ${p => p.theme.spacing(8)} auto;
  width: ${p => p.theme.spacing(75)};`;

export const Statistics = ({title, stats}) => {
  return (
    <StatisticsWrapper>
      {title && <Title>{title}</Title>}
      <StatsList> 
        <ListItems stats={stats}></ListItems>
      </StatsList>
    </StatisticsWrapper>
  )
}

