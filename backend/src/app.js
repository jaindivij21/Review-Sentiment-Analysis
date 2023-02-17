const express = require("express");
const cors = require("cors");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "mahaveersoni",
  host: "localhost",
  database: "hackathon",
  port: 5432,
});

const app = express();

app.use(express.json({ limit: "40mb" }));
app.use(cors());

app.post("/", (req, res) => {
  const reviews = JSON.parse(req.body.data);
  reviews.forEach((review) => {
    pool.query("insert into reviews(content, rating) values($1, $2)", [
      review["Review Content"],
      review.Rating,
    ]);
  });
  res.send({ message: "File uploaded successfully" });
});

app.get("/", (req, res) => {
  res.json("home page");
});

module.exports = app;
