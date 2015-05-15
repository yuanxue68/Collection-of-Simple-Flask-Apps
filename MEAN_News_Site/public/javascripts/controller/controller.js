angular.module("News").controller("MainCtrl",["$scope","posts", function($scope,posts){
	$scope.test="Hello world!";
	$scope.posts=posts.posts;
	//console.log(posts.getAll());

	$scope.addPost=function(){
		if(!$scope.title||$scope.title===""){
			return;
		}
		$scope.posts.push({
			title:$scope.title,
			upvotes: 0,
			link:$scope.link,
			comments:[
				{author: "Joe", body: "Cool", upvotes: 0},
				{author: "Bob", body: "Nice", upvotes: 0}
			]
		});
		$scope.title="";
		$scope.link="";
	};

	$scope.upvote=function(post){
		post.upvotes++;
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