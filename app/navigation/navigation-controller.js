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
						$scope.status=true;
						$scope.msg='Email id not exists!';
						$scope.loggedIn=false;
						}else if(res.status=='Password Error'){
						$scope.status=true;
						$scope.msg='Password Incorrect!';
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