import MainModel from "~/server/models/Mainone";

export default defineEventHandler(async ()=>{
    try{
        const result = await MainModel.find()
        return result
    }catch(err){
        console.log(err)
    }
})