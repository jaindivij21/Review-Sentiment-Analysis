"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_review_controller = exports.load_review_controller = void 0;
function load_review_controller(req, res) {
    const reviews = JSON.parse(req.body.data);
    console.log(reviews);
    res.send({ message: "File uploaded successfully" });
}
exports.load_review_controller = load_review_controller;
function get_review_controller(_req, res) {
    res.json({ message: "fas" });
}
exports.get_review_controller = get_review_controller;
//# sourceMappingURL=reviews.js.map