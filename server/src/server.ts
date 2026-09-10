import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database";
import { errorHandler, notFound } from "./middleware/errorHandler";
import caseRoutes from "./routes/caseRoutes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => res.json({ game: "Digital Detective", message: "Backend is alive." }));
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/cases", caseRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const start = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Digital Detective server running on port ${PORT}`));
};
start().catch((error: unknown) => {
  console.error("Unable to start server:", error);
  process.exit(1);
});
