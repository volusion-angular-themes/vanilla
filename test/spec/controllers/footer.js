describe('Controller: FooterCtrl', function () {

	'use strict';

	// load the controller's module
	beforeEach(module('methodApp'));

	var FooterCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		FooterCtrl = $controller('FooterCtrl', {
			$scope: scope
		});
	}));

	xit('should attach a list of awesomeThings to the scope', function () {
		expect(scope.awesomeThings.length).toBe(3);
	});
});
