'use strict';

describe('Controller: AboutThelmaCtrl', function () {

  // load the controller's module
  beforeEach(module('thelmaKiddWebsiteApp'));

  var AboutThelmaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutThelmaCtrl = $controller('AboutThelmaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutThelmaCtrl.awesomeThings.length).toBe(3);
  });
});
