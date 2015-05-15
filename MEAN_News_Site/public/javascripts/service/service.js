angular.module("News").factory("posts",["$http",function($http){
	var o={
		posts:[],
	};
	o.getAll = function() {
	    return $http.get('/posts').success(function(data){
	    	console.log(data);
	      	angular.copy(data, o.posts);
	    });
	};
	return o;
}]);