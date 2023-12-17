import mongoose from "mongoose";

const postScema = new mongoose.Schema({
  title: { type: String, require: true, trim: true },

});

const PostModel = mongoose.model("posttests", postScema);

export default PostModel;
