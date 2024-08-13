import express from "express";
import Destinations from "../model/Destination.js";
const destinationRoute = express.Router();

destinationRoute.get("/", async (req, res) => {
  const data = await Destinations.find();
  res.json(data);
});

destinationRoute.post("/", async (req, res) => {
  const data = await new Destinations(req.body);
  data.save();
  res.json(data);
});
destinationRoute.delete("/:id", async (req, res) => {
  await Destinations.findByIdAndDelete(req.params.id);
  res.send("id deleted");
});

export default destinationRoute;
