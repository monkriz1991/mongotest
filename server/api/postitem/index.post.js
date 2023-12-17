import PostModel from "~/server/models/Post";

export default defineEventHandler(async (event) => {
    try {
       
        const data = await readBody(event);
        const obj = { _id: data };
        const result = await PostModel.find(obj)
        
        return result
    }catch(err){
        console.log(err)
    }
})