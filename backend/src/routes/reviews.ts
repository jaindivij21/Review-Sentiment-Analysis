import express from "express";
import {
  load_review_controller,
  get_review_controller,
} from "../controllers/reviewsController";

const router = express.Router();

router.post("/upload_reviews", load_review_controller);
router.get("/get_reviews", get_review_controller);

export default router;
