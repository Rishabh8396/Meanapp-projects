'use strict';

angular.module('yeomanappApp', ['yeomanappApp.auth', 'yeomanappApp.admin', 'yeomanappApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'btford.socket-io', 'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
