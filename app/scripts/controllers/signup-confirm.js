'use strict';

angular.module('serviceDemoApp')
.controller('SignUpConnectCtrl', function ($scope, $location) {

  $scope.submit = function() {
    $location.path('/awesome');
  };

});