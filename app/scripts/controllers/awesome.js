'use strict';

angular.module('serviceDemoApp')
.controller('AwesomeCtrl', function ($scope, User) {
  $scope.user = User;
  console.log($scope.user);
});