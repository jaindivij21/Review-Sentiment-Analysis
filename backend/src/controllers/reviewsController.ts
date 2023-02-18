import { Request, Response } from "express";

// Commands
import reviewsService from "../services/reviewsService";

// Action to upload reviews from a file
export async function post(req: Request, res: Response) {
  const reviews = JSON.parse(req.body.data);
  if (reviews.length === 0) {
    res.send({ message: "No reviews to upload" });
  }

  try {
    const createdReviews = await reviewsService.addReview(
      reviews
    );

    res.send({
      message:
        "File uploaded successfully, the reviews have been created!",
      reviews: createdReviews,
    });
  } catch (err) {
    console.log(err);
    res.send({ message: "Error uploading reviews" });
  }
}

// Action to get reviews and their sentiments
// TODO: Add Pagination, Filters, Sorting
export async function index(req: Request, res: Response) {
  res.json({
    message: "Shows All the Reviews (with given ids)",
  });
}

export async function show(req: Request, res: Response) {
  const reviewID = req.params.id;
  res.json({ message: "Shows one Review" });
}
