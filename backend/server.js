const express=require("express");
const dotenv=require("dotenv");
const chats = require("./data/data");
const connectDb=require("./config/db");
const userRoutes=require("./routes/userRoutes");


dotenv.config();
connectDb();
const app=express();


app.get("/api/v1",(req,res)=>{res.send("Api is running")})

// app.get("/api/v1/chats",(req,res)=>{
//     res.send(chats);
// })

// app.get("/api//v1/chats/:id",(req,res)=>{
//     //console.log(req.params.id);
//     const singleChat=chats.find((chat)=>chat._id===req.params.id);
//     res.send(singleChat)
// })


app.use("/api/v1/user",userRoutes)

const PORT=process.env.PORT || 5000

app.listen(5000,()=>{console.log("Server started at port " + PORT)})




