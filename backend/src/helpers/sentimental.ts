import { sentiment_type } from "@prisma/client";

export const getSentimentString = (
  score: number,
  magnitude: number
) => {
  // https://cloud.google.com/natural-language/docs/basics#interpreting_sentiment_analysis_values
  // NOTE: magnitude is the strength of the sentiment, score is the actual sentiment

  // TODO: This is a very basic implementation, threshold values should be adjusted

  if (magnitude >= 0.5) {
    if (score > 0.5) {
      return sentiment_type.clearly_positive;
    } else if (score < -0.5) {
      return sentiment_type.clearly_negative;
    } else if (score >= -0.2 && score <= 0.2) {
      return sentiment_type.mixed;
    } else {
      return sentiment_type.neutral;
    }
  } else {
    if (score > 0.5) {
      return sentiment_type.positive;
    } else if (score < -0.5) {
      return sentiment_type.negative;
    } else {
      return sentiment_type.neutral;
    }
  }
};
