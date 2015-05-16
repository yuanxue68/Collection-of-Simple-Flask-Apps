angular.module("News").factory("posts",["$http",function($http){
	var o={
		posts:[],
	};

	o.getAll = function() {
	    return $http.get('/posts').success(function(data){
	    	//console.log(data);
	      	angular.copy(data, o.posts);
	    });
	};

	o.createPost=function(post){
		return $http.post('/posts',post).success(function(data){
			o.posts.push(data);
		});
	};

	o.upvote=function(post){
		return $http.put('/posts/'+post._id+'/upvote').success(function(data){
			post.upvotes+=1;
		});
	};
	return o;
}]);