//   const http=require("http");

//   const server=http.createServer((req,res)=>{
// 	res.end("Hi! Alia");
//   });

//   server.listen(3000);

//Using Express

const express=require("express");
const app=express();

app.get("/",(Req,res)=>{
	res.send("welcome to home page");
});

app.get("/alia",(req,res)=>{
	res.send("Hi! Alia");
});

app.get("/shio",(req,res)=>{
	res.send("Hi! Shio");
});

app.get("/user/:id",(req,res)=>{
	res.json({
		params:req.params,
		query:req.query,
	})
});

app.get("/search",(req,res)=>{
	res.send(req.query);
});

app.listen(3000,()=>{
	console.log("running on port 3000");
});