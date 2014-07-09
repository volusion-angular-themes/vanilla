angular.module('Volusion.controllers')
	.controller('HomeCtrl', ['$scope', '$filter', 'vnApi',
		function($scope, $filter, vnApi) {

			'use strict';

			vnApi.Product().get({ filter: 'featured', pageSize: 4 }).$promise
				.then(function(response) {
					$scope.featuredProducts = response.data;
				});

			$scope.getImagePath = function (imageCollections) {
				// This gets the default:medium image for the product
				var path = $filter('vnProductImageFilter')(imageCollections);

				if ('' === path) {
					return '/images/theme/tcp-no-image.jpg';
				}

				angular.element('.' + cssClassForTopLevelMenuItems).css('visibility', 'visible');
			}

			$rootScope.windowWidth = $window.outerWidth;
			angular.element($window).bind('resize', function() {
				$rootScope.windowWidth = $window.outerWidth;
				$rootScope.$apply('windowWidth');
			});

			$rootScope.$watch('windowWidth', function() {
				$scope.displaySmartNavMoreMenuItem = false;
				angular.element('.nav-top-level-menu-items').css('visibility', 'hidden');

				$scope.smartNavCategories = $scope.categories;

				$timeout(function() {
					buildSmartNav('nav-top-level-menu-items');
				}, 0);
			});

			// Handle Navigation
			vnApi.Nav().get({ navId: 1 }).$promise
				.then(function(response) {
					console.log('nav response: ', response);
					$scope.smartNavCategories = $scope.categories = response.data;

					$timeout(function() {
						buildSmartNav('nav-top-level-menu-items');
					}, 0);

				}, function(error) {
					console.log('Error: ' + error);
				});

			// Handle the setup data
			$scope.config = vnApi.Configuration().get();

			$scope.cart = vnApi.Cart().get();

			//this.getConfig(this.getCart);  //TODO Prune this code
			//
			// TODO add function for ng-click that does this.
			//$rootScope.viewCart = function() {
			//	if ($rootScope.isInDesktopMode) {
			//		return '/shoppingcart.asp';
			//	} else {
			//		return '/checkout.asp';
			//	}
			//};
			//
			// TODO: Refactor the add to cart flow
			// Add to Cart
			//$rootScope.$on('ADD_TO_CART', function(event, cartItem) {
			//	var cartId = $scope.cart && $scope.cart.id;
			//	if (cartId === undefined) {
			//		cartId = $scope.config.checkout.cartId;
			//	}
			//	api.carts.save({ cartId: cartId }, cartItem)
			//			.then(function(response) {
			//				$rootScope.$emit('ITEM_ADDED_TO_CART', $scope.cart = response.data);
			//			});

			//	Cart.saveCart(cartId, cartItem)
			//			.then(function(response) {
			//				$scope.cart = response.data;
			//			});
			//});

			$scope.doSearch = function () {
				alert('Searching for: ' + $scope.searchLocal);
			};
		}
	]);
