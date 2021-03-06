'use strict';

// Declare app level module which depends on views, and components
var udadisiApp = angular.module('udadisiApp', [
  'ngRoute',
  'udadisiServices',
  'udadisiControllers',
  'udadisiDirectives',
  'udadisiFilters',
  'bw.paging',
  'ngFitText'
  ]);

udadisiApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'app/partials/home.html',
      controller: 'HomeCtrl'
    }).
    when('/home', {
      templateUrl: 'app/partials/home.html',
      controller: 'HomeCtrl'
    }).
    when('/about', {
      templateUrl: 'app/partials/about.html',
      controller: 'AboutCtrl'
    }).
    when('/how-it-works', {
      templateUrl: 'app/partials/how-it-works.html',
      controller: 'AboutCtrl'
    }).
    when('/locations/:location', {
      templateUrl: 'app/partials/location-profile.html',
      controller: 'LocationsCtrl'
    }).
    when('/trends/:trend', {
      templateUrl: 'app/partials/trend-profile.html',
      controller: 'TrendsCtrl'
    }).
    when('/trend-explorer', {
      templateUrl: 'app/partials/trend-explorer.html',
      controller: 'ExplorerCtrl'
    }).
    otherwise({redirectTo: '/home'});
}]);