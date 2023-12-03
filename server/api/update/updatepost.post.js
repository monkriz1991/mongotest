import PostModel from "~/server/models/Post";

export default defineEventHandler(async (event)=>{
    try{
        const data = await readBody(event)
        const post = await PostModel.replaceOne(data)
        return post
    }catch(err){
        console.log(err)
    }
})