"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_review_controller = exports.load_review_controller = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function toJson(data) {
    return JSON.stringify(data, (_, v) => typeof v === "bigint" ? `${v}n` : v).replace(/"(-?\d+)n"/g, (_, a) => a);
}
function load_review_controller(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const reviews = JSON.parse(req.body.data);
        console.log(reviews);
        res.send({ message: "File uploaded successfully" });
    });
}
exports.load_review_controller = load_review_controller;
function get_review_controller(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.customers.findFirst();
        console.log(users);
        res.json({ message: toJson(users) });
    });
}
exports.get_review_controller = get_review_controller;
//# sourceMappingURL=reviews_controller.js.map