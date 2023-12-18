import mongoose from "mongoose";

const postScema = new mongoose.Schema({
  title: { type: String, require: true, trim: true },
  status: {
    type: String,
    require: true,
    index: true,
    unique: false,
    sparse: true,
  },
  text: { type: String, require: true, trim: true },
  img: { type: String, require: true, trim: true },
  description: { type: String, require: true, trim: true },
});

const PostModel = mongoose.model("posttests", postScema);

export default PostModel;
