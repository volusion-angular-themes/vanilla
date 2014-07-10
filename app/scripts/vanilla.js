// Vanilla Test 

'use strict';

angular.module('store')
	.controller('StoreCtrl', [

(function() {
	var app = angular.module('store',[]);

	app.controller("StoreCtrl", function(){
		this.product = products;
	});

	var products = [

		{	name: 'Vanilla',
			category: 'Ice Cream',
			price: 5,
			images: [
				{
					main:
				}
			]
		},
		{	name: 'Strawberry',
			category: 'Ice Cream',
			price: 5,
			images: [
				{
					main:
				}
			]
		},
		{	name: 'Pistachio',
			category: 'Ice Cream',
			price: 5,
			images: [
				{
					main:
				}
			]
		},	
		{	name: 'Chocolate',
			category: 'Ice Cream',
			price: 5,
			images: [
				{
					main:
				}
			]
		}
	];

})();	