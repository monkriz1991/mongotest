import MainModel from "~/server/models/Mainone";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);
    console.log(data)
    const post = await MainModel.deleteOne(data);
    return post;
  } catch (err) {
    console.log(err);
  }
});
