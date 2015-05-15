angular.module("News").config(["$routeProvider", function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"templates/body.html",
		controller:"MainCtrl",
		resolve:{
			postPromise: ['posts', function(posts){
		      	return posts.getAll();
		    }]
		}
	})
	.when("/posts/:id",{
		templateUrl:"templates/post.html",
		controller:"PostCtrl"
	})
	.otherwise({
		redirectTo:"/"
	});
}]);