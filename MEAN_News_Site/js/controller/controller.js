angular.module("News").controller("MainCtrl",["$scope","posts",function($scope,posts){
	$scope.test="Hello world!";
	$scope.posts=posts.posts;

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
	};
}]);
