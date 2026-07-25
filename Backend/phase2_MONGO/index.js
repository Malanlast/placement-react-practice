const express=require("express");
const app=express();
require("dotenv").config();
app.use(express.json());
const mongoose=require("mongoose");

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB connected.."))
.catch(err=>console.log("DB error: " +err));

app.get("/",(req,res)=>{
	res.send("welcome");
});

app.listen(3000,(req,res)=>{
    console.log(`server running on port ${process.env.PORT}`);
});