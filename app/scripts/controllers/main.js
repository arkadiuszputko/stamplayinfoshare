'use strict';

/**
 * @ngdoc function
 * @name stamplayInfoshareApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stamplayInfoshareApp
 */
angular.module('stamplayInfoshareApp')
  .controller('MainCtrl', function ($scope, awesomething) {
    $scope.awesomeThings = [];
    awesomething.get()
      .then(function(res) {
        $scope.awesomeThings = res.data;
      }, function(err) {
        console.log(err);
      });
  });
