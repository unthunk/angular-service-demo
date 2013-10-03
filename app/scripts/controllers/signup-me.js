'use strict';

angular.module('serviceDemoApp')
.controller('SignUpMeCtrl', function ($scope, $location) {

  $scope.submit = function() {
    $location.path('/signup/url');
  };

});