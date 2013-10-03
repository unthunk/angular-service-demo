'use strict';

angular.module('serviceDemoApp')
.controller('SignUpConfirmCtrl', function ($scope, $location, User) {
  $scope.user = User;

  $scope.submit = function() {
    $location.path('/awesome');
  };

});