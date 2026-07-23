  const http=require("http");

  const server=http.createServer((req,res)=>{
	res.end("Hi! Alia");
  });

  server.listen(3000);