var mongoose = require("mongoose");
module.exports = mongoose.model("message",{
					sender:String,
					message:String,
					created:{type:Date, default:Date.now},
					conversionId:String
					
});