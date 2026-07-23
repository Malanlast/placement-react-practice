function logger(req,res,next){
	console.log("Requested request");
	next();
};

module.exports=logger;