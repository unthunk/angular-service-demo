'use strict';

angular.module('serviceDemoApp')
.controller('SignUpUrlCtrl', function ($scope, $location, User) {
  $scope.user = User;

  $scope.submit = function() {
    $location.path('/signup/connect');
  };

});