/**
 * @ngdoc directive
 * @name methodApp.directive:showOnHover
 * @description
 * # showOnHover
 */

angular.module('Volusion.directives')
	.directive('showOnDropdownHover', ['$timeout',
		function ($timeout) {

			'use strict';

			return {
				restrict: 'A',
				link    : function postLink(scope, element) {

					var timerHide,
						trigger = element.parent().parent();  // <li>

					trigger.bind('mouseenter', function() {
							element.show();
						})
						.bind('mouseleave', function() {
							timerHide = $timeout(function () {
								element.hide();
							}, 100);
						})
						.bind('click', function() {
							element.show();
						});

					element.bind('mouseenter', function() {
							element.show();
							$timeout.cancel( timerHide );
						})
						.bind('mouseleave', function() {
							element.hide();
						});

					/* jshint unused:false */
					scope.$on('$destroy',
						function( event ) {

							$timeout.cancel( timerHide );

						}
					);
					/* jshint unused:true */
				}
			};

			// enquire.register('screen and (min-width:992px)', {

			// 	setup  : function () {
			// 		$timeout = false;
			// 	},
			// 	unmatch: function () {
			// 		$timeout = false;
			// 	},
			// 	// transitioning to mobile mode
			// 	match  : function () {
			// 		$timeout = false;
			// 	}
			// });

		}]);
