angular.module("app")
		.controller('createprofile',['Upload','$scope','$state','$http','user',function(Upload,$scope,$state,$http,user){
			if(user){
				$scope.user=user;
			}
			if(user.image){
				$scope.status_image=true;
				$scope.image='http://localhost:3000'+user.image;
				//console.log(user.image);
			}
			$scope.createProfile=function(){
			
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
						$scope.status_image=true;
						$scope.image='http://localhost:3000'+data;
						}).error(function(err){
							console.log("err");
						});
					}
				};
				
				$http.post('/api/editprofiledata',$scope.user).success(function(data){
					if(data){
						$scope.status=true;
						//$scope.user.username='';
						//$scope.user.bio='';
						$scope.file='';
					}else{
						$scope.status=false;
					}
				}).error(function(err){
					console.log(error);
				});
				
				
			};
		
		}]);