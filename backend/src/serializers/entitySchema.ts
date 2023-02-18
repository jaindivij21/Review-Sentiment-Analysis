export const entitySchema = {
  title: "Entity",
  type: "object",
  properties: {
    id: { type: "integer" },
    score: { type: "number" },
    magnitude: { type: "number" },
    entity: { type: "string" },
    name: { type: "string" },
    sentiment: { type: "string" },
  },
  required: [
    "id",
    "score",
    "magnitude",
    "entity",
    "name",
    "sentiment",
  ],
};
