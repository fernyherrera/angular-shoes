'use strict';
angular
  .module('angularApp', [
    'firebase','ui','ui.filters','ui.router','ngAnimate','angularApp.service.cart','angularApp.filters','angularApp.controller.main','angularApp.controller.cart','angularApp.controller.about',
    'angularfire.login',

  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('home.details', {
        url: '^/product/:id',
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      });
  }]);
