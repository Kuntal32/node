angular.module("app")
		.controller('createprofile',['Upload','$scope','$state','$http',function(Upload,$scope,$state,$http){
			$scope.createProfile=function(){
			//console.log($scope);
				$scope.$watch(function(){
					return $scope.file;
				},function(){
					$scope.upload($scope.file);
				});
				
				$scope.upload = function(file){
					if(file){
						Upload.upload({
							url:'/api/editprofile',
							method:'POST',
							file:file
						}).progress(function(event){
						
						}).success(function(data){
						
						}).error(function(err){
							console.log("err");
						});
					}
				};
				
				
			};
		
		}]);