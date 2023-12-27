import MainOneModel from "~/server/models/Mainone";
import MainTwoModel from "~/server/models/Maintwo";
import MainThreeModel from "~/server/models/Mainthree";

export default defineEventHandler(async (event)=>{
    try{
        const data = await readBody(event)
        if(data.type=='one'){
            const one = await MainOneModel.create(data.form)
            return one
        }
        if(data.type=='two'){
            const two = await MainTwoModel.create(data.form)
            return two
        }
        if(data.type=='three'){
            const three = await MainThreeModel.create(data.form)
            return three
        }
    }catch(err){
        console.log(err)
    }
})