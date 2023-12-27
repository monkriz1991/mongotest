import mongoose from "mongoose";

const mainthreeScema = new mongoose.Schema({
  title: { type: String, require: true, trim: true },
  img: { type: String, require: true, trim: true },
  description: { type: String, require: true, trim: true },
});

const MainThreeModel = mongoose.model("mainthree", mainthreeScema);

export default MainThreeModel;
