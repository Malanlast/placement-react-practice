const express=require("express");
const app=express();
require("dotenv").config();
app.use(express.json());
const mongoose=require("mongoose");
const Student=require("./models/student.js");

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB connected.."))
.catch(err=>console.log("DB error: " +err));

app.get("/",(req,res)=>{
	res.send("welcome");
});
//create post
app.post("/student",async(req,res)=>{
	try{
		const student=new Student(req.body);
		await student.save();

		res.status(201).json(student);
	}
	catch(err){
		res.status(500).json({
			message:err.message
		})
	}
});
//read all
app.get("/student",async(req,res)=>{
	try{
		const student=await Student.find();
		res.json(student);
	}
	catch(err){
		res.status(500).json({
			message:err.message
		})
	}
});
//read one
app.get("/student/:id",async(req,res)=>{
	try{
		const student=await Student.findById(req.params.id);
		res.json(student);
	}
	catch(err){
		res.status(500).json({
			message:err.message
		})
	}
});
//update 
app.put("/student/:id",async(req,res)=>{
	try{
		const student=await Student.findByIdAndUpdate(
			req.params.id,
			req.body,
			{new:true}
		);
		res.json(student);
	}
	catch(err){
		res.status(500).json({
			message:err.message
		})
	}
});

app.listen(3000,(req,res)=>{
    console.log(`server running on port ${process.env.PORT}`);
});