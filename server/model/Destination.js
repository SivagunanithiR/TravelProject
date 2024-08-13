import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  image: String,
  rating: Number,
  places: String,
  location: String,
  highlight:String,
});

const Destinations = mongoose.model("Destination", schema);
export default Destinations;
