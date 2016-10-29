require('../../init/init.js');
var User = require("../datasets/users");

module.exports.updateAvatar= function(req,res){
	var userId=req.session.user._id;
	var file = req.files.file;
	
	var temPath=file.path;
	
	var uploadDate=new Date();
	
	var targetPath=path.join(__dirname+'../../../uploads/'+userId+file.name);
	var savePath='/uploads/'+userId+file.name;
	//console.log(file.name);
	fs.rename(temPath,targetPath,function(err){
		if(err){
			console.log(err);
		}else{
			//console.log(req.body);
			User.findById(userId,function(err,userdata){
				if(err)
				{
				
				}else{
					var user=userdata;
					user.image=savePath;
					user.save(function(err){
						if(err)
						console.log("false");
					});
				}
			});
		}
	});
	
};