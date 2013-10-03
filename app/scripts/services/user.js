'use strict';

angular.module('serviceDemoApp.services',[])
.factory('User',function(){
  return {
    firstName: null,
    lastName: null,
    emailAddress: null,
    url: null,
    connect: null
  }
});