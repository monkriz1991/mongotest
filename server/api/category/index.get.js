import CategoryModel from "~/server/models/Category";

export default defineEventHandler(async ()=>{
    try{
        const result = await CategoryModel.find()
        return result
    }catch(err){
        console.log(err)
    }
})