(function(){
	angular.module('app')
				.controller('SignupController',['$scope','$state','$http',function($scope,$state,$http){
						$scope.createUser=function(){
						
							$http.post('api/user/signup',$scope.newUser).success(function(response){
								if(response.status){
									$scope.status=true;
								}else{
									$scope.status=false;
								}
							
							}).error(function(error){
								console.log(error);
							
							}); 
						
						};
				
				}]);

}());