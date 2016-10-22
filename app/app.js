(function(){
	angular.module('TimeWest',['ui.router']).config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$urlRouterProvider.otherwise('/signup');
		
		$stateProvider.state('signUp',{
			url:'/signup',
			templateUrl:'app/signup/signup.html',
			controller:'SignupController'
			})
			
			
		
		}]);

}());