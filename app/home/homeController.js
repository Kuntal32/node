angular.module("app")
		.controller('homeController',['$scope','users',function($scope,users){
			console.log(users);
			$scope.users=users;
		
		}]);