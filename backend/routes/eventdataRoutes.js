import express from "express";
import EventData from "../models/Eventdata.js";
const router = express.Router();



router.post("/", async (req, res) => {
  const {
    title,
    date,
    date2,
    time,
    location,
    description,
    image,
    schedule,
    speakers,
    price,
    seats,
    attendees,
    category,
    paid,
  } = req.body;

  try {
    const newEventData = new EventData({
      title,
      date,
      date2,
      time,
      location,
      description,
      image,
      schedule,
      speakers,
      price,
      seats,
      attendees,
      category,
      paid,
    });
    await newEventData.save();
    res.status(201).json(newEventData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get("/eventdata", async (req, res) => {
  try {
    const events = await EventData.find().sort({date: 1});
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/eventdata/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const event = await EventData.findById(id);
    if (!event) {
      return res.status(404).json({message: 'event not found'});
    }
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

export default router;