'use strict';

angular.module('dataviewer2App', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/data.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


  });
