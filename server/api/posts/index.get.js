import PostModel from "~/server/models/Post";

export default defineEventHandler(async ()=>{
    try{
        const result = await PostModel.find()
        return result
    }catch(err){
        console.log(err)
    }
})