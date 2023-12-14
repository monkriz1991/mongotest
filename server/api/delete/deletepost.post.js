import PostModel from "~/server/models/Post";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);
    const post = await PostModel.deleteOne(data);
    return post;
  } catch (err) {
    console.log(err);
  }
});
