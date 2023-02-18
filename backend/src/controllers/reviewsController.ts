import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bulkSerializer from "../serializers/bulkSerializer";
import objectSerializer from "../serializers/objectSerializer";
import {
  reviewIDSchema,
  reviewSchema,
  reviewsSchema,
} from "../serializers/reviewSchema";

// Commands
import reviewsService from "../services/reviewsService";

const prisma = new PrismaClient();

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
      reviews: objectSerializer(
        createdReviews,
        reviewIDSchema
      ),
    });
  } catch (err) {
    console.log(err);
    res.send({ message: "Error uploading reviews" });
  }
}

// Action to get all the reviews and their sentiments
export async function index(req: Request, res: Response) {
  const reviewIDs = req.body.ids;

  const reviews = await prisma.reviews.findMany({
    where: {
      id: {
        in: reviewIDs,
      },
    },
    include: {
      sentiments: {
        include: {
          entities: true,
          sentences: true,
        },
      },
    },
  });

  if (reviews.length === 0) {
    res.send({ message: "No reviews found" });
  }

  res.json({
    message: "Reviews Fetched Successfully!",
    review: bulkSerializer(reviews, reviewSchema),
  });
}

// Action to get one review and its sentiment
export async function show(req: Request, res: Response) {
  const reviewID = req.params.id;

  const review = await prisma.reviews.findUnique({
    where: {
      id: parseInt(reviewID),
    },
    include: {
      sentiments: {
        include: {
          entities: true,
          sentences: true,
        },
      },
    },
  });

  res.json({
    message: "Review Fetched Successfully!",
    review: objectSerializer(review, reviewSchema),
  });
}
