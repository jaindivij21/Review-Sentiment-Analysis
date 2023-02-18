import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function toJson(data: any) {
  return JSON.stringify(data, (_, v) =>
    typeof v === "bigint" ? `${v}n` : v
  ).replace(/"(-?\d+)n"/g, (_, a) => a);
}

export async function load_review_controller(req: Request, res: Response) {
  const reviews = JSON.parse(req.body.data);
  console.log(reviews);
  res.send({ message: "File uploaded successfully" });
}

export async function get_review_controller(_req: Request, res: Response) {
  const users = await prisma.customers.findFirst();
  console.log(users);
  res.json({ message: toJson(users) });
}
