(function(){
	angular.module('app',['ui.router']).config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$urlRouterProvider.otherwise('/');
		
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
						url:'/',
						
					
					});
			
			
		
		}]);

}());