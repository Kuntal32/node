var mongoose = require("mongoose");
var passwordHash = require("password-hash");
var User = require("../datasets/users");

module.exports.signup= function(req,res){
			var password=passwordHash.generate(req.body.password);
			var data={"email":req.body.email,"password":password};
			
			var user = new User(data);
			user.save();
			res.json(req.body);
};

module.exports.login = function (req,res){

	User.find(req.body.email,function(err,result){
			if(err){
				console.log(err);
			}
			
			if(result && result.length===1){
			var userData=result[0];
			
			if(passwordHash.verify(req.body.password,userData.password)==true){
			
				res.json({email:req.body.email,_id:userData._id});
				}else{
				
					res.json({error:"Password Error"});
				}
			}
	});
};