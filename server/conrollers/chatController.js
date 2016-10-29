require('../../init/init.js');
var User = require("../datasets/users");

module.exports.getUsers= function(req,res){
	var userId=req.session.user._id;
	
	User.find({'_id': {$ne : req.session.user._id}},function(err,users){
		if(err)
		{
			console.log(err);
		}else{
			res.json(users);
		}
	});
	
};
