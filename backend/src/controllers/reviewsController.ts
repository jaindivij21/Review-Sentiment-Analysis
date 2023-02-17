import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function load_review_controller(
  req: Request,
  res: Response
) {
  const reviews = JSON.parse(req.body.data);
  res.send({ message: "File uploaded successfully" });
}

export async function get_review_controller(
  req: Request,
  res: Response
) {
  res.json({ message: "hello" });
}
