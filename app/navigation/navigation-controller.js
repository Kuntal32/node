(function(){
	angular.module('TimeWest')
			.controller('NavigationController',['$scope','$http','$state',function($scope,$http,$state){
					$scope.logUsein = function(){
					
						$http.post('/api/user/login',$scope.login).success(function(res){
						console.log(res);
						//localStorage.setItem('User-Data',JSON.stringify(res));
						
						}).error(function(error){
							console.log(error);
						});
					}
			}]);

})();