const express=require("express");
const http=require("http");
const {Server}=require("socket.io");

const app=express();
const server=http.createServer(app);

const io=new Server(server,{
	cors:{
		origin: "http://localhost:5173",
	}
});

io.on("connection",(socket)=>{
	console.log("user connected");
	console.log(socket.id);
});

server.listen(5000,()=>{
	console.log("server running on port 5000");
});


 