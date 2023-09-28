import { StatList, StatItem, StatText } from "./feedbacksStatistics.styled"
export const StatisticList = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  percentage,
}) => {
    return (
<StatList>{[
        <StatItem><StatText type='good'>Good: {good}</StatText></StatItem>,
    <StatItem><StatText type='neutral'>Neutral: {neutral}</StatText></StatItem>,
    <StatItem><StatText type='bad'>Bad: {bad}</StatText></StatItem>,
    <StatItem><StatText>Total: {total}</StatText></StatItem>,
    <StatItem><StatText>Positive feedback: {percentage}%</StatText></StatItem>
]}</StatList>)
}