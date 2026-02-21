const express=require('express');
const { createNote, getNote, deleteNote, updateNote } = require('../controllers/noteController');

const note=express.Router();

note.post('/notes',createNote);
note.get('/get',getNote);
note.delete("/notes/:id", deleteNote);
note.put("/notes/:id", updateNote);

module.exports=note