'use strict';

describe('Controller: StyleGuideCtrl', function () {

  // load the controller's module
<<<<<<< HEAD
  beforeEach(module('methodApp'));
=======
  beforeEach(module('volusionMethodThemeApp'));
>>>>>>> CSS consolidation:

  var StyleGuideCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StyleGuideCtrl = $controller('StyleGuideCtrl', {
      $scope: scope
    });
  }));

<<<<<<< HEAD
  xit('should attach a list of awesomeThings to the scope', function () {
=======
  it('should attach a list of awesomeThings to the scope', function () {
>>>>>>> CSS consolidation:
    expect(scope.awesomeThings.length).toBe(3);
  });
});
