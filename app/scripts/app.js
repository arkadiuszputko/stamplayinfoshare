'use strict';

/**
 * @ngdoc overview
 * @name stamplayInfoshareApp
 * @description
 * # stamplayInfoshareApp
 *
 * Main module of the application.
 */
Stamplay.init('apinfoshareapp');
angular
  .module('stamplayInfoshareApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngStamplay'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
