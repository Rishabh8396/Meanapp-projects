'use strict';

angular.module('yeomanappApp.auth', ['yeomanappApp.constants', 'yeomanappApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
