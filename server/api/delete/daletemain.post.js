import MainOneModel from "~/server/models/Mainone";
import MainTwoModel from "~/server/models/Maintwo";
import MainThreeModel from "~/server/models/Mainthree";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);

    if (data.obtype == "one") {
      const post = await MainOneModel.deleteOne({ _id: data._id });
      return post;
    }
    if (data.obtype == "two") {
      const post = await MainTwoModel.deleteOne({ _id: data._id });
      return post;
    }
    if (data.obtype == "three") {
      const post = await MainThreeModel.deleteOne({ _id: data._id });
      return post;
    }
  } catch (err) {
    console.log(err);
  }
});
