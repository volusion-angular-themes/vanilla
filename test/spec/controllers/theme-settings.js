'use strict';

describe('Controller: ThemeSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('methodApp'));

  var ThemeSettingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThemeSettingsCtrl = $controller('ThemeSettingsCtrl', {
      $scope: scope
    });
  }));

  xit('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
