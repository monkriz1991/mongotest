import mongoose from "mongoose";

const maintwoScema = new mongoose.Schema({
  title: { type: String, require: true, trim: true },
  raiting: { type: String, require: true, trim: true },
  img: { type: String, require: true, trim: true },
  description: { type: String, require: true, trim: true },
});

const MainTwoModel = mongoose.model("maintwo", maintwoScema);

export default MainTwoModel;
