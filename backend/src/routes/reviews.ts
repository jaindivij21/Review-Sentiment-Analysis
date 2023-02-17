import express from "express";
import {
  load_review_controller,
  get_review_controller,
} from "../controllers/reviews_controller";

const router = express.Router();

router.post("/load_reviews", load_review_controller);
router.get("/get_reviews", get_review_controller);

export default router;
