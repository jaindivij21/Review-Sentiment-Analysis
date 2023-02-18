import { sentimentSchema } from "./sentimentSchema";

export const reviewIDSchema = {
  title: "Review",
  type: "array",
  items: {
    type: "integer",
  },
};

export const reviewSchema = {
  title: "Review",
  type: "object",
  properties: {
    id: { type: "integer" },
    rating: { type: "integer" },
    content: { type: "string" },
    sentiments: sentimentSchema,
  },
};

export const reviewsAnalysisSchema = {
  title: "Reviews Analysis",
};
