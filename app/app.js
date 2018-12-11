'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'Books',
  'Users',
  'myApp.version'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true)

    $routeProvider
      .when('/users', {
        templateUrl: 'users/users.html',
        controller: 'UsersController',
        resolve: {
          // TODO: implement request to server here
          users: function ($q, $timeout) {
            return $q(function (resolve, reject) {
              $timeout(function () {
                resolve([
                  {
                    "id": 0,
                    "firstName": "Dmitry",
                    "secondName": "Provodnikov",
                    "age": 26,
                    "books": [{ "id": 0, "name": "Kolobok" }]
                  }, {
                    "id": 1,
                    "firstName": "Sergey",
                    "secondName": "Grigorev",
                    "age": 25,
                    "books": []
                  }
                ]);
              }, 1000);
            });
          }
        }
      })
      .when('/users/:id', {
        templateUrl: 'users/userInfo.html',
        controller: 'UserInfoController',
        resolve: {
          // TODO: implement request to server here
          user: function ($route) {
            var user;
            if ($route.current.params.id === '0') {
              user = {
                "id": 0,
                "firstName": "Dmitry",
                "secondName": "Provodnikov",
                "age": 26,
                "books": [{ "id": 0, "name": "Kolobok" }]
              }
            } else if ($route.current.params.id === '1') {
              user = {
                "id": 1,
                "firstName": "Sergey",
                "secondName": "Grigorev",
                "age": 25,
                "books": []
              }
            }
            return Promise.resolve(user);
          }
        }
      })
      .when('/books', {
        templateUrl: 'books/books.html',
        controller: 'BooksController',
        resolve: {
          // TODO: implement request to server here
          books: function ($q, $timeout) {
            return $q(function (resolve, reject) {
              $timeout(function () {
                resolve([
                  {
                    "id": 0,
                    "name": "Kolobok",
                    "isAvailable": false
                  }, {
                    "id": 1,
                    "name": "Game Of Thrones",
                    "isAvailable": true
                  }
                ]);
              }, 1000);
            });
          }
        }
      })
      .otherwise({ redirectTo: '/books' });
  }]);
