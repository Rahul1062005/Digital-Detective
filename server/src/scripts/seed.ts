import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/database";
import { case001 } from "../data/case001";
import { Case } from "../models/Case";
dotenv.config();
const seed = async () => { await connectDB(); await Case.findOneAndUpdate({ caseId: case001.caseId }, case001, { upsert: true, new: true, setDefaultsOnInsert: true }); console.log("Case 001 is ready."); await mongoose.disconnect(); };
seed().catch((error: unknown) => { console.error("Seeding failed:", error); process.exit(1); });
