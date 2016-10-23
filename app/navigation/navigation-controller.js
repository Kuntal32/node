(function(){
	angular.module('app')
			.controller('NavigationController',['$scope','$http','$state','$window',function($scope,$http,$state,$window){
					
					if(localStorage['User-Data']){
						$scope.loggedIn=true;
						//$window.location.href = '/user';
					}else{
						$scope.loggedIn=false;
					}
					
					$scope.logUsein = function(){
					
						$http.post('/api/user/login',$scope.login).success(function(res){
						if(res.status=='Email Error'){
						console.log("1");
						$scope.loggedIn=false;
						}else if(res.status=='Password Error'){
						console.log("0");
						$scope.loggedIn=false;
						}else if(res.status=='auth'){
						$scope.loggedIn=true;
						localStorage.setItem('User-Data',JSON.stringify(res));
						$window.location.href = '/user/home';
						}
						
						}).error(function(error){
							console.log(error);
						});
					}
			}]);

})();