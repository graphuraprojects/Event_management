import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

router.post("/booking", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving booking", error });
  }
});

export default router;
