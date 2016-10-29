(function(){
	angular.module('app',['ui.router','ngFileUpload']).config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		
		if(document.cookie.length===0){
		$urlRouterProvider.otherwise('/');
		}else{
		
		$urlRouterProvider.otherwise('/home');
		}
		$stateProvider.state('/',{
						url:'/',
						templateUrl:'app/login/login.ejs',
					}).state('signUp',{
						url:'/signup',
						templateUrl:'app/signup/signup.ejs',
						controller:'SignupController'
						})
					.state('createProfile',{
						url:'/createprofile',
						templateUrl:'../app/profile/profile.ejs',
						controller:'createprofile'
					}).state('/home',{
						url:'/home',
						templateUrl:'../app/home/home.ejs',
					
					});
			
			
		
		}]);

}());