import express from "express";
import {
  post,
  index,
  show,
  reviewsAnalysis,
} from "../controllers/reviewsController";

const router = express.Router();

router.post("/upload_reviews", post);
router.get("/get_reviews", index);
router.get("get_reviews_analysis", reviewsAnalysis);
router.get("/get_review/:id", show);

export default router;
