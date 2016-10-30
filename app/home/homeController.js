angular.module("app")
		.controller('homeController',['$scope','$http','users',function($scope,$http,users){
			//console.log(users);
			$scope.users=users;
			$scope.currentUser=JSON.parse(localStorage['User-Data']);
			//console.log(document.cookie);
			$scope.chat_satus=false;
			$scope.createConversion=function(chatUser){
				//alert($scope.currentUser._id);
				var postData={_id:chatUser};
				$http.post('/api/enterChatRoom',postData).success(function(res){
					if(res.messagedata[0]){
					//console.log(res.messagedata[0]);
						$scope.messagedata=res.messagedata;
					}
					if(res.userdata){
						$scope.conversion_id=res.userdata[0]._id;
						var users=res.userdata[0].users;
						var sender_id=users.split(",");
						$scope.sender_id=sender_id[0];
						}
						$scope.chat_satus=true;
				}).error(function(err){
					console.log(err);
				});
			};
			
			$scope.send_message=function(conversion_id,sender_id){
			
				try{
				var socket=io.connect("http://127.0.0.1:8080/");
						}catch(e){
						
						}
						if(socket!==undefined){
						
						socket.emit('input',{sender:sender_id,message:$scope.message,conversionId:conversion_id});
							socket.on('output',function(data){
							
							console.log(data);
							});
						}
			};
		}]);