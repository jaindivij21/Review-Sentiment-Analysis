"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviewsController_1 = require("../controllers/reviewsController");
const router = express_1.default.Router();
router.post("/upload_reviews", reviewsController_1.post);
router.get("/get_reviews", reviewsController_1.index);
router.get("/get_review/:id", reviewsController_1.show);
exports.default = router;
//# sourceMappingURL=reviews.js.map