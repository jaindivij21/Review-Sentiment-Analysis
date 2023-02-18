import { entitySchema } from "./entitySchema";
import { sentenceSchema } from "./sentenceSchema";

export const sentimentSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    score: { type: "number" },
    magnitude: { type: "number" },
    sentiment: { type: "string" },
    entities: {
      type: "array",
      items: entitySchema,
    },
    sentences: {
      type: "array",
      items: sentenceSchema,
    },
  },
};
