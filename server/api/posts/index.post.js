import PostModel from "~/server/models/Post";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);

    if (data.ParamsCat) {
      const obj = { kirilica: data.ParamsCat };
      const result = await PostModel.find(obj);
      return result;
    }
    if (data != undefined && !data.ParamsCat) {
      const result = await PostModel.find()
        .skip(data.sortPage)
        .limit(data.pageSize);
      const count = await PostModel.find().count();
      return { result, count };
    } else {
      const result = await PostModel.find();
      return result;
    }
  } catch (err) {
    console.log(err);
  }
});
