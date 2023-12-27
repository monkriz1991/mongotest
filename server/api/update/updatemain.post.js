import MainOneModel from "~/server/models/Mainone";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);
    const obj = { _id: data._id };
    console.log(obj)
    const post = await MainOneModel.replaceOne(obj, data);
    return post;
  } catch (err) {
    console.log(err);
  }
});
