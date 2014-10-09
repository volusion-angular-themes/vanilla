'use strict';
/**
 * @ngdoc directive
 * @name Vanilla Search Box directive
 *
 * @description
 * Barely modified verson of the vnSearchForm
 *
 * @restrict AE
 *
 * @scope
 *
 * @usage
 * <div vanilla-search-box></div>
 *
 * */


angular.module('vanillaApp')
		.directive('vanillaSearchBox', ['vnSearchManager', function (vnSearchManager) {

			return {
				templateUrl: 'scripts/vanilla-search-box/vanilla-search-box.html',
				restrict   : 'AE',
				replace    : true,
				scope      : {
					searchTerm: '='
				},
				link       : function postLink(scope, element, attrs) {
					element.bind('click', function () {
						element.find('input').focus();
					});

					scope.searchTerm = scope.searchTerm || vnSearchManager.getSearchText();
					scope.allowCollapse = attrs.allowCollapse && !!(JSON.parse(attrs.allowCollapse));

					scope.doSearch = function () {
						vnSearchManager.updateSearch(scope.searchTerm);
					};

					scope.$watch(
							function () {
								return vnSearchManager.getSearchText();
							},
							function (searchText) {
								scope.searchTerm = searchText || '';
							}, true
					);
				}
			};
		}]);
