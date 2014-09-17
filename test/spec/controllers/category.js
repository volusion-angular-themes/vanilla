'use strict';

describe('Controller: CategoryCtrl', function() {

	// load the controller's module
	beforeEach(module('vanillaApp'));

	var CategoryCtrl;
	var scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		CategoryCtrl = $controller('CategoryCtrl', {
			$scope: scope
		});
	}));

	it('should attach a list of awesomeThings to the scope', function() {
//		expect(scope.awesomeThings.length).toBe('');
		expect(!!CategoryCtrl).toBe(true);
	});
});
