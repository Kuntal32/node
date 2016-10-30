require('../../init/init.js');
var User = require("../datasets/users");
var Conversion = require("../datasets/conversions");
var Message = require("../datasets/messages");
module.exports.sendMessage=function(data){
	var message=new Message(data);
	message.save(function(err,res){
		if(err){
		console.log(err);
		}else{
			console.log("done");
		}
	});
};