angular.module("News").controller("MainCtrl",["$scope","posts", function($scope,posts){
	$scope.test="Hello world!";
	$scope.posts=posts.posts;

	$scope.addPost=function(){
		if(!$scope.title||$scope.title===""){
			return;
		}
		posts.createPost({
			title:$scope.title,
			link:$scope.link,
		});
		$scope.title="";
		$scope.link="";
	};

	$scope.upvote=function(post){
		posts.upvote(post);
	};
}]);

angular.module("News").controller("PostCtrl",["$scope","posts","$routeParams",
	function($scope, posts, $routeParams){
	$scope.post=posts.posts[$routeParams.id];

	$scope.addComment=function(){
		if($scope.body===""){
			return;
		}
		$scope.post.comments.push({
			body:$scope.body,
			author: "user",
			upvotes:0
		});

	};

	$scope.upvote=function(comment){
		comment.upvotes++;
	};

}]);