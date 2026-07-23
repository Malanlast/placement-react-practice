//   const http=require("http");

//   const server=http.createServer((req,res)=>{
// 	res.end("Hi! Alia");
//   });

//   server.listen(3000);

//Using Express

const express=require("express");
const app=express();
const logger=require("./middleware.js");

let users=[
	{id:1, name:"shio"},
	{id:2, name:"alia"},
];

//app.use(logger);

app.get("/",(Req,res)=>{
	res.send("welcome to home page");
});

app.get("/alia",(req,res)=>{
	res.send("Hi! Alia");
});

app.get("/shio",(req,res)=>{
	res.send("Hi! Shio");
});

app.get("/user/:id",logger,(req,res)=>{
	res.json({
		params:req.params,
		query:req.query,
	})
});

app.get("/search",logger,(req,res)=>{
	res.send(req.query);
});

//grt data
app.get("/users",(req,res)=>{
	res.send(users);
});

//post data
app.post("/users",(req,res)=>{
	users.push(req.body);
	res.json({
		message:"user added",
	});
});

app.listen(3000,()=>{
	console.log("running on port 3000");
});