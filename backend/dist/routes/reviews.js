"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviews_controller_1 = require("../controllers/reviews_controller");
const router = express_1.default.Router();
router.post("/load_reviews", reviews_controller_1.load_review_controller);
router.get("/get_reviews", reviews_controller_1.get_review_controller);
exports.default = router;
//# sourceMappingURL=reviews.js.map