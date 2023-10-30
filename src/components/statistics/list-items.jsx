import { StatItem, StatLabel, StatPercenntage} from "./statistics.styled";

export const ListItems = ({ stats }) => {
  return (stats.map(({ id, label, percentage }) => {
    return (
      <StatItem key={id}>
        <StatLabel>{label}</StatLabel>
        <StatPercenntage>{percentage}%</StatPercenntage>
      </StatItem>);
  }));
}