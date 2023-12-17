import mongoose from "mongoose";

const postScema = new mongoose.Schema({
  title: { type: String, require: true, trim: true },
  status: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  text: { type: String, require: true, trim: true },
});

const PostModel = mongoose.model("posttests", postScema);

export default PostModel;
