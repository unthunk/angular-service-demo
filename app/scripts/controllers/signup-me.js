'use strict';

angular.module('serviceDemoApp')
.controller('SignUpMeCtrl', function ($scope, $location, User) {
  $scope.user = User;

  $scope.submit = function() {
    $location.path('/signup/url');
  };

});