'use strict';

angular.module('Users', ['ngRoute'])

.controller('UsersController', function($scope, users) {
  console.log(users);
  $scope.users = users;
})
.controller('UserInfoController', function($scope, user) {
  console.log(user);
  $scope.user = user;
});