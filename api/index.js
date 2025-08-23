// Vercel serverless function entry point
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "../backend/src/routes/auth.route.js";
import messageRoutes from "../backend/src/routes/message.route.js";
import { connectDB } from "../backend/src/lib/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(cors({
  origin: process.env.NODE_ENV === "production" 
    ? ["https://your-app-name.vercel.app", "https://your-custom-domain.com"] 
    : "http://localhost:5173",
  credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Connect to database
await connectDB();

export default app;
