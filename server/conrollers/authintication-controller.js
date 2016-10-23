require('../../init/init.js');
var User = require("../datasets/users");

module.exports.signup= function(req,res){
			var password=passwordHash.generate(req.body.password);
			var data={"email":req.body.email,"username":req.body.username,"password":password};
		User.find({"email":req.body.email},function(err,result){
	
			if(err){
				console.log(err);
			}	
			
			if(result && result.length===0){
			var user = new User(data);
			user.save();
			res.json(req.body);
			}else{
				var resdata={"status":"email id already exists"};
				res.json(resdata);
			}
			
		});
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
					var sendData={status:"auth",email:req.body.email,_id:userData._id};
					req.session.user=result[0];
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