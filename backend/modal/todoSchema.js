const mongoose=require("mongoose")
const todoSchema=new mongoose.Schema({ 
    text:String ,
    iscomplit:Boolean
})
module.exports=mongoose.model("todos",todoSchema)