(function(){
	var app=angular.module("store",[]);
	//controller for the store
	app.controller("StoreController",function(){
		this.products=gems;
	});

	app.controller("ReviewController",function(){
		this.review={};
		this.addReview=function(product){
			product.reviews.push(this.review);
			this.review={};
		};
	});

	app.directive("productTitle", function(){
		return{
			restrict: "A",
			templateUrl: "templates/product-title.html",
		};
	});

	app.directive("productPanels",function(){
		return{
			restrict:"E",
			templateUrl: "templates/product-panels.html",
			controller: function(){
				this.tab=1;
				this.selectTab=function(setTab){
					this.tab=setTab;
				};
				this.isSelected=function(checkTab){
					return checkTab===this.tab;
				};
			},
			controllerAs:"panel"

		}
	})

	var gems=[
	{
		name:"Dedecahedron",
		price:2.95,
		description: "...",
		canPurchase: true,
		image: "images/gem-01.gif",
		reviews:[
		{
			stars:5,
			body:"yeahh good goodstuff",
			author: "joe",
		},
		{
			stars:1,
			body:"yeahh good goodstuff",
			author:"yuan",

		}],

	},
	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: "...",
		canPurchase: false,
		image: "images/gem-02.gif",
		reviews:[
		{
			stars:5,
			body:"yeahh good goodstuff",
			author: "joe",
		},
		{
			stars:1,
			body:"yeahh good goodstuff",
			author:"yuan",

		}],
	}];
})();
