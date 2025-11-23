import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import eventRoutes from "./routes/eventRoutes.js";
import eventsDataRoute from "./routes/eventdataRoutes.js";

import bookingRoutes from "./routes/bookingRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Auth Routes
app.use("/api", authRoutes);

// Booking routes
app.use("/api", bookingRoutes);

// Contact routes
app.use("/api", contactRoutes);

// Event Routes
app.use("/api", eventRoutes);

// Event Data Routes
app.use("/api", eventsDataRoute);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
