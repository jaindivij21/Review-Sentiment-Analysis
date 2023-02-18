import { groupBy, toLower, map, mean, sumBy, meanBy } from "lodash";

export function thirdGraph(entities) {
  const calc = new Map();
  entities.forEach((entity) => {
    if (!calc.has(entity.entity)) calc.set(entity.entity, entity.score);
  });
  const labels = [];
  const values = [];
  calc.forEach((value, key) => {
    labels.push(key);
    values.push(value);
  });
  return { labels, values };
}

const sentiment_map = {
  clearly_positive: 5,
  clearly_negative: -5,
  mixed: 0,
  neutral: 0,
  positive: 1,
  negative: -1,
};

export function firstGraph(entities) {
  const groupedData = groupBy(entities, (o) => toLower(o.name));
  const averageData = {};
  Object.entries(groupedData).forEach(([category, group]) => {
    const mean = meanBy(group, (obj) => Number(obj.score));
    const meanSentiment = meanBy(group, (obj) => sentiment_map[obj.sentiment]);
    averageData[category] = { x: meanSentiment, y: mean };
  });
  return averageData;
}

export function secondGraph(entities) {
  const groupedData = groupBy(entities, (o) => toLower(o.entity));
  const averageData = {};
  Object.entries(groupedData).forEach(([category, group]) => {
    const mean = meanBy(group, (obj) => Number(obj.score));
    const meanSentiment = meanBy(group, (obj) => sentiment_map[obj.sentiment]);
    averageData[category] = { x: meanSentiment, y: mean };
  });
  return averageData;
}
