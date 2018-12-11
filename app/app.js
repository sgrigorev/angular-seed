'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true)

    $routeProvider
      .when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl',
        resolve: {
          // I will cause a 1 second delay
          delay: function ($q, $timeout) {
            var delay = $q.defer();
            $timeout(delay.resolve, 1000);
            return delay.promise;
          }
        }
      })
      .when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl',
        resolve: {
          // I will cause a 1 second delay
          delay: function ($q, $timeout) {
            var delay = $q.defer();
            $timeout(delay.resolve, 1000);
            return delay.promise;
          }
        }
      })
      .otherwise({ redirectTo: '/view1' });
  }]);
