const _ = require("lodash");

export const getAvgRating = (reviews: any) => {
  return _.mean(
    reviews,
    (review: { rating: number }) => review.rating
  );
};
