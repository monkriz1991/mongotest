import mongoose from "mongoose";

const postScema = new mongoose.Schema({
  category: { type: String, require: true, trim: true },
  title: { type: String, require: true, trim: true },
  kirilica: { type: String, require: true, trim: true },
  preview: { type: String, require: true, trim: true },
  img: { type: String, require: true, trim: true },
  info: { type: String, require: true, trim: true },
  price: { type: Number, require: true, trim: true },
  show_index: { type: Boolean, require: true, trim: true },
  description: { type: String, require: true, trim: true },
});

const PostModel = mongoose.model("posttests", postScema);

export default PostModel;
