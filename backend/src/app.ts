import express from "express";
import cors from "cors";

import reviewRoute from "./routes/reviews";

const app = express();

app.use(express.json({ limit: "40mb" }));
app.use(cors());

app.use("/reviews", reviewRoute);

export default app;
