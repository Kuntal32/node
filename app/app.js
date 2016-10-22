(function(){
	angular.module('TimeWest',['ui.router']).config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$urlRouterProvider.otherwise('/');
		
		$stateProvider.state('signUp',{
			url:'/signup',
			templateUrl:'app/signup/signup.html',
			controller:'SignupController'
			})
			.state('createProfile',{
			url:'/createprofile',
			templateUrl:'app/profile/profile.ejs',
			controller:'createprofile'
			});
			
			
		
		}]);

}());