'use strict';

/**
 * @ngdoc function
 * @name stamplayInfoshareApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stamplayInfoshareApp
 */
angular.module('stamplayInfoshareApp')
  .controller('MainCtrl', function ($scope, $stamplay) {
    $stamplay.Object('awesomething').get()
      .then(function(res) {
        this.awesomeThings = res;
        console.log(res);
      }, function(err) {
        console.log(err);
      });

  });
