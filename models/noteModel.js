const mongoose=require('mongoose')


const noteModel=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
},{timestamps:true})

const Note=mongoose.model("Note",noteModel);

module.exports=Note