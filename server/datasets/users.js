var mongoose = require("mongoose");
module.exports = mongoose.model("user",{
					email:String,
					username:String,
					password:String
					
});