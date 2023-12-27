import mongoose from "mongoose";

const mainoneScema = new mongoose.Schema({
  title: { type: String, require: true, trim: true },
  img: { type: String, require: true, trim: true },
  description: { type: String, require: true, trim: true },
});

const MainOneModel = mongoose.model("mainone", mainoneScema);

export default MainOneModel;
