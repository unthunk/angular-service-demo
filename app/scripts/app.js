'use strict';

angular.module('serviceDemoApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/signup/me', {
        templateUrl: 'views/signup-me.html',
        controller: 'SignUpMeCtrl'
      })
      .when('/signup/connect', {
        templateUrl: 'views/signup-connect.html',
        controller: 'SignUpConnectCtrl'
      })
      .when('/signup/url', {
        templateUrl: 'views/signup-url.html',
        controller: 'SignUpUrlCtrl'
      })
      .when('/signup/confirm', {
        templateUrl: 'views/signup-confirm.html',
        controller: 'SignUpUrlCtrl'
      })
      .when('/awesome', {
        templateUrl: 'views/awesome.html',
        controller: 'SignUpUrlCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
