/**
 * @ngdoc function
 * @name vanillaApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the vanillaApp
 */

angular.module('Volusion.controllers')
	.controller('FooterCtrl', ['$scope', 'translate', 'themeSettings', 'ContentMgr',
		function ($scope, translate, themeSettings, ContentMgr) {
			'use strict';

			$scope.$watch(
				function () {
					return ContentMgr.getFooterState();
				},
				function (state) {
					$scope.footerState = state;
				}, true);
		}]);
