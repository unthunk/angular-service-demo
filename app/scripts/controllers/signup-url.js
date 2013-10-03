'use strict';

angular.module('serviceDemoApp')
.controller('SignUpUrlCtrl', function ($scope, $location) {

  $scope.submit = function() {
    $location.path('/signup/connect');
  };

});