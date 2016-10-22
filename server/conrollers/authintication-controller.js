var mongoose = require("mongoose");
var passwordHash = require("password-hash");
var User = require("../datasets/users");
var express = require("express");
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var app=express();

app.use(cookieParser());
app.use(expressSession({secret: process.env.SESSION_SECRET || 'secret'}));


module.exports.signup= function(req,res){
			var password=passwordHash.generate(req.body.password);
			var data={"email":req.body.email,"password":password};
			
			var user = new User(data);
			user.save();
			res.json(req.body);
};

module.exports.login = function (req,res){

	User.find({"email":req.body.email},function(err,result){
	
			if(err){
				console.log(err);
			}
			//console.log(result);
			if(result && result.length===1){
			var userData=result[0];
			
			if(passwordHash.verify(req.body.password,userData.password)==true){
					res.cookie('email',req.body.email);
					res.cookie('_id',userData._id);
					//res.session.email=req.body.email;
					var sendData={status:"auth",email:req.body.email,_id:userData._id};
					res.json(sendData);
					
				}else{
				console.log(0);
					res.json({status:"Password Error"});
				}
			}else{
					res.json({status:"Email Error"});
			}
	});
};