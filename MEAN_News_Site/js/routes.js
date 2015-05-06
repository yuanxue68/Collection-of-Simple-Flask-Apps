angular.module("News").config(["$routeProvider", function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"templates/body.html",
		controller:"MainCtrl"
	})
	.otherwise({
		redirectTo:"/"
	});
}]);