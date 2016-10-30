require('../../init/init.js');
var User = require("../datasets/users");
var Conversion = require("../datasets/conversions");
var Message = require("../datasets/messages");

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
	
	/*User.find({'_id': {$eq : req.session.user._id}},function(err,logedUser){
		if(err)
		{
			console.log(err);
		}else{
			res.json(logedUser);
		}
	}); */
};

module.exports.enterChatRoom=function(req,res){
		var users=req.session.user._id+','+req.body._id;
		//console.log(Conversion);
		Conversion.find({'users':users},function(err,userData){
				if(err){
					console.log(err);
				}else{
					if(userData && userData.length!=0){
					//console.log(userData[0]._id);
						Message.find({'conversionId':userData[0]._id},function(err,messagedata){
						//console.log(messagedata);
								if(err){
									console.log(err);
								}else{
										if(messagedata){
										console.log(messagedata);
												var resdata={'messagedata':messagedata,'userdata':userData};
												res.json(resdata);
											}else{
											//console.log(1);
												var resdata={'userdata':userData};
												res.json(resdata);
											}
								}
							});
					}else{
					
					var reverceusers=req.body._id+','+req.session.user._id;
					Conversion.find({'users':reverceusers},function(err,userData){
						if(err){
								console.log(err);
							}else{
								if(userData && userData.length!=0){
											Message.find({'conversionId':userData[0]._id},function(err,messagedata){
						//console.log(messagedata);
											if(err){
												console.log(err);
											}else{
													if(messagedata){
														console.log(messagedata);
															var resdata={'messagedata':messagedata,'userdata':userData};
															res.json(resdata);
														}else{
														//console.log(1);
															var resdata={'userdata':userData};
															res.json(resdata);
														}
											}
										});
								
								}else{
										var userdata={"users":users};
										var conversion= new Conversion(userdata);
										conversion.save(function(err,save){
											if(err){
											console.log("false");
											}else{
												var resdata={"userdata":[{"_id":save._id,"users":users}]};
												res.json(resdata);
											}
						});
								
								}
						}
					});
						
					
					}
				}
		
		});
};


