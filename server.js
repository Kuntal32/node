
require(__dirname+'/init/init.js');
var authinticationController = require("./server/conrollers/authintication-controller");

app.use('/app',express.static(__dirname+'/app'));
app.use('/node_modules',express.static(__dirname+'/node_modules'));


app.get('/',function(req,res){

	if(req.session.user){
	
	res.redirect('/user/home');
	
	}else{  
		res.sendFile(__dirname+'/index.html');
	}
});

app.get('/user/home',function(req,res){
		
		res.render('user',{user: req.session.user,title:"Home"});
});

app.get('/logout',function(req,res){
		//res.send(req.cookies._id);
		req.session.destroy(function(){
			//console.log(req.session.user);
			res.clearCookie("email");
			res.clearCookie("_id");
			res.redirect('/');
		});
		
});

app.post('/api/user/signup', authinticationController.signup);

//authintication

app.post('/api/user/login', authinticationController.login);

app.listen(3000,function(){
	console.log("running");
});


