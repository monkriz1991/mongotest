import CategoryModel from "~/server/models/Category";

export default defineEventHandler(async (event)=>{
    try{
        const data = await readBody(event);
        const result = await CategoryModel.find().skip(data.sortPage).limit(data.pageSize)
        const count = await CategoryModel.find().count()
        return {result,count}
    }catch(err){
        console.log(err)
    }
})