'use strict';

angular.module('serviceDemoApp')
.controller('SignUpConfirmCtrl', function ($scope, $location) {

  $scope.submit = function() {
    $location.path('/awesome');
  };

});