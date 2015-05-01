var app=angular.module("News",[]);

app.controller("MainCtrl",["$scope",function($scope){
	$scope.test="Hello world!";
	$scope.posts=[
	{title: 'post 1', upvotes: 5},
	{title: 'post 2', upvotes: 12},
	{title: 'post 3', upvotes: 4},
	];

	$scope.addPost=function(){
		if(!$scope.title||$scope.title===""){
			return;
		}
		$scope.posts.push({
			title:$scope.title,
			upvotes: 0,
			link:$scope.link
		});
		$scope.title="";
		$scope.link="";
	};

	$scope.upvote=function(post){
		post.upvotes++;
	}
}]);