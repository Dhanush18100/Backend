const Note = require("../models/noteModel");

//create note
const createNote=async (req,res) => {
    try {
        const{title,description}=req.body;
        if(!title || !description){
            return res.json({success:false,message:"Both fields are required"})
        }
        const newNote=await Note.create({
            title,
            description
        })
       return res.json({success:true,message:"Note created",newNote})
    } catch (error) {
         return console.log(error.message)
    }
    
}

//get note
const getNote=async (req,res) => {
    try {
        const notes=await Note.find({})
        res.json({success:true,notes})
    } catch (error) {
        return console.log(error.message)
    }
    
}
//delete note

const deleteNote=async (req,res) => {
    try {
        // const {id}=req.params;
         const id = req.params.id;  
         console.log(id); 

        const deleteNotes=await Note.findByIdAndDelete(id)
        if(!deleteNotes){
            return res.json({success:false,message:"Note not found"})
        }
        return res.json({success:true,message:"Note deleted"})
    } catch (error) {
         return console.log(error.message)
    }
    
}

//update
const updateNote=async (req,res) => {
    try {
        const {title,description}=req.body;
        const {id}=req.params;
        const updateNotes=await Note.findByIdAndUpdate(id,{title,description})
        if(!updateNotes){
             return res.json({success:false,message:"Note not found"})
        }
        return res.json({success:true,message:"Note updated",updateNotes})
    } catch (error) {
        
    }
    
}

module.exports={
    createNote,getNote,deleteNote,updateNote
}

