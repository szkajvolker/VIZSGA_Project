import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import ScooterRouter from "./routes/scooter.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use("/api/scooters", ScooterRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server is running on http://localhost:${PORT} address`);
});
