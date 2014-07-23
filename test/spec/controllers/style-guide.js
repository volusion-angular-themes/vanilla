'use strict';

describe('Controller: StyleGuideCtrl', function () {

  // load the controller's module
  beforeEach(module('volusionMethodThemeApp'));

  var StyleGuideCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StyleGuideCtrl = $controller('StyleGuideCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
