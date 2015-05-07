angular.module("News").config(["$routeProvider", function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"templates/body.html",
		controller:"MainCtrl"
	})
	.when("/posts/:id",{
		templateUrl:"templates/post.html",
		controller:"PostCtrl"
	})
	.otherwise({
		redirectTo:"/"
	});
}]);