'use strict';

angular.module('Books', ['ngRoute'])

.controller('BooksController', function($scope, books) {
  console.log(books);

  $scope.books = books;
});