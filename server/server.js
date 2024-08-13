import express from "express";
import mongoose from "mongoose";
 import feedbackRoute from "./routes/feedbackRoute.js"; 
import destinationRoute from "./routes/destinationRoute.js";
 import route from './routes/userRoute.js';
import cors from "cors";
import hotelRoute from "./routes/hotelRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/hotel",hotelRoute);
app.use("/destinations", destinationRoute);
app.use("/feedback", feedbackRoute);
 app.use("/",route);
app.listen(3000);
mongoose
  .connect(
    "mongodb+srv://sivagunanithi04:THOMASSHELBY04@cluster0.jsnqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
