'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('stamplayInfoshareApp'));

  var $scope,
    deferred,
    $q;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$q_, $rootScope, awesomething) {
    $scope = $rootScope.$new();
    $q = _$q_;

    deferred = _$q_.defer();

    spyOn(awesomething, 'get').and.returnValue(deferred.promise);
    $controller('MainCtrl', {
      $scope: $scope,
      awesomething: awesomething
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    deferred.resolve({data: []});
    $scope.$apply();
    console.log($scope.awesomeThings);
    expect($scope.awesomeThings.length).toBe(0);
  });
});
