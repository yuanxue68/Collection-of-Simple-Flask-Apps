angular.module("TdTax")
.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "templates/home.html"
	})
	.when("/menu1", {
		templateUrl: "templates/menu1.html"
	})
	.when("/menu2", {
		templateUrl: "templates/menu2.html"
	})
	.when("/menu3", {
		templateUrl: "templates/menu3.html"
	})
	.otherwise({redirectTo: "/"});
});