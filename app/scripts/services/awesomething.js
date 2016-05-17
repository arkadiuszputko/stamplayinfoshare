'use strict';

/**
 * @ngdoc function
 * @name stamplayInfoshareApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stamplayInfoshareApp
 */
angular.module('stamplayInfoshareApp')
  .service('awesomething', function ($stamplay) {
    this.get = function () {
      return $stamplay.Object('awesomething').get();
    };

    this.create = function (data) {
      return $stamplay.Object('awesomething').save(data);
    }
  })
