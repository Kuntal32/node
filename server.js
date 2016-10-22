var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var app=express();
var authinticationController = require("./server/conrollers/authintication-controller");



app.set('view engine', 'ejs');
app.use('/app',express.static(__dirname+'/app'));
app.use('/node_modules',express.static(__dirname+'/node_modules'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({secret: process.env.SESSION_SECRET || 'secret'}));

mongoose.connect("mongodb://localhost/time-west");

app.get('/',function(req,res){

	if(req.cookies._id){
	console.log(req.cookies._id);
	res.redirect('/user');
	
	}else{
		res.sendFile(__dirname+'/index.html');
	}
});

app.get('/user',function(req,res){
		//res.send(req.cookies._id);
		//consol.log(req.session.email);
		res.render('user',{user: req.cookies.email,title:"Home"});
});

app.post('/api/user/signup', authinticationController.signup);

//authintication

app.post('/api/user/login', authinticationController.login);

app.listen(3000,function(){
	console.log("running");
});


