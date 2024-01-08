import mongoose from "mongoose";

const mainthreeScema = new mongoose.Schema({
  type: { type: String, require: true, trim: true },
  title: { type: String, require: true, trim: true },
  img: { type: String, require: true, trim: true },
  link: { type: String, require: true, trim: true },
  description: { type: String, require: true, trim: true },
  color: { type: String, require: true, trim: true },
});

const MainThreeModel = mongoose.model("mainthree", mainthreeScema);

export default MainThreeModel;
