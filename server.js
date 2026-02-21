const express = require("express");
const note = require("./routes/noteRoute");
const connectDB = require("./config/mongoDB");
const app=express();
const dotenv = require("dotenv");
dotenv.config();

const PORT=3000;

connectDB();

app.get('/',(req,res)=>{
   res.send("Hello World");
})

app.use(express.json())
app.use('/api',note)

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})