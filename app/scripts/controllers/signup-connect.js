'use strict';

angular.module('serviceDemoApp')
.controller('SignUpConnectCtrl', function ($scope, $location, User) {
  $scope.user = User;

  $scope.submit = function() {
    $location.path('/signup/confirm');
  };

});