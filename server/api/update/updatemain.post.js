import MainOneModel from "~/server/models/Mainone";
import MainTwoModel from "~/server/models/Maintwo";
import MainThreeModel from "~/server/models/Mainthree";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);
    const obj = { _id: data.form._id };
    if (data.form['type'] == "one") {
      const post = await MainOneModel.replaceOne(obj, data.form);
      return post;
    }
    if (data.form['type'] == "two") {
      const post = await MainTwoModel.replaceOne(obj, data.form);
      return post;
    }
    if (data.form['type'] == "three") {
      const post = await MainThreeModel.replaceOne(obj, data.form);
      return post;
    }
  } catch (err) {
    console.log(err);
  }
});
