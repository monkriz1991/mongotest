import CategoryModel from "~/server/models/Category";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);
    const post = await CategoryModel.deleteOne(data);
    return post;
  } catch (err) {
    console.log(err);
  }
});
