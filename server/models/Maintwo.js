import mongoose from "mongoose";

const maintwoScema = new mongoose.Schema({
  type: { type: String, require: true, trim: true },
  title: { type: String, require: true, trim: true },
  raiting: { type: String, require: true, trim: true },
  img: { type: String, require: true, trim: true },
  link: { type: String, require: true, trim: true },
  description: { type: String, require: true, trim: true },
});

const MainTwoModel = mongoose.model("maintwo", maintwoScema);

export default MainTwoModel;
