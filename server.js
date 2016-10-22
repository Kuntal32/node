var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var authinticationController = require("./server/conrollers/authintication-controller");

var app=express();

app.use('/app',express.static(__dirname+'/app'));
app.use('/node_modules',express.static(__dirname+'/node_modules'));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/time-west");

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});



app.post('/api/user/signup', authinticationController.signup);

//authintication

app.post('/api/user/login', authinticationController.login);

app.listen(3000,function(){
	console.log("running");
});


