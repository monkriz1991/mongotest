import { ref } from "vue";
import PostModel from "~/server/models/Post";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);
    const obj = { _id: data._id };
    const post = await PostModel.replaceOne(obj, data);
    return post;
  } catch (err) {
    console.log(err);
  }
});
