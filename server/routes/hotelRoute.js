import express from "express";
import Hotel from "../model/Hotel.js";

const hotelRoute = express.Router();

hotelRoute.get("/",async(req,res)=>{
    const newdata = await Hotel.find();
    res.json(newdata);
});
hotelRoute.post("/",async (req,res)=>{
    const newdata = await new Hotel(req.body);
    newdata.save();
    res.json(newdata);
});
export default hotelRoute;



