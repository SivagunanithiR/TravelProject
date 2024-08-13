import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: String,
  email: String,
  dateOfJourney: Date,
  travelledLocation: String,
  transportationRating: Number,
  tourGuideRating: Number,
  overallExperience: Number,
  feedback: String,
});

const Feedback = mongoose.model("Feedback", schema);
export default Feedback;
