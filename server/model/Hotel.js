import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    hotelname:String,
    places:String,
    price:Number,
    location:String,
    image:String,

});
const Hotel = mongoose.model("hotel",schema);
export default Hotel;