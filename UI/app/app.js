'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.user',
  'myApp.user_detail',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  
  $routeProvider.when('/user_detail/:userId', {
    templateUrl: "/user_detail/user_detail.html",
    controller: 'UserDetailCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/user'});
}]);
