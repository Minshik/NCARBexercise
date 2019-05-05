'use strict';

angular.module('myApp.user_detail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user_detail', {
    templateUrl: 'user_detail/user_detail.html',
    controller: 'UserDetailCtrl'
  });
}])

.controller('UserDetailCtrl', ['$scope', '$http', '$routeParams',  
    function UserDetailController($scope, $http, $routeParams) {
      //Set EndPoint
      var endPoint = 'http://localhost:3928/api/User/' + $routeParams.userId;
      
      //Getting User by Id
      $http({
        method: 'GET',
        url: endPoint,
      }).then(function successCallback(response) {

        $scope.user = response.data;
    
      }, function errorCallback(response) {
    
        alert("Error. Try Again!");
    
      });

      //Update User
      $scope.updateUser = function() {

        //$http PUT function
        $http({

          method: 'PUT',
          url: endPoint,
          data: $scope.user

        }).then(function successCallback(response) {

          alert("User has updated Successfully")

        }, function errorCallback(response) {

          alert("Error. while updating user Try Again!");

        });

      };
}]);