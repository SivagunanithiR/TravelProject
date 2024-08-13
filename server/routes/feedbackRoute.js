import express from "express";
import Feedback from "../model/Feedback.js";

const feedbackRoute = express.Router();

// Get all feedbacks
feedbackRoute.get("/", async (req, res) => {
  const data = await Feedback.find();
  res.json(data);
});

// Post new feedback
feedbackRoute.post("/", async (req, res) => {
  const data = new Feedback(req.body);
  await data.save();
  res.json(data);
});

export default feedbackRoute;
