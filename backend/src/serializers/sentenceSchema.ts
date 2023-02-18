export const sentenceSchema = {
  title: "Sentence",
  type: "object",
  properties: {
    id: { type: "integer" },
    content: { type: "string" },
    score: { type: "number" },
    magnitude: { type: "number" },
    sentiment: { type: "string" },
  },
};
