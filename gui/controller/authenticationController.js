var cms = angular.module('cms');

cms.controller('authenticationController', ['$scope', '$http', 'userData', function($scope, $http, userData) {

    $scope.currentUser = {};
    $scope.loggedIn = false;

    $scope.loginUser = function (user) {
        var json = JSON.stringify(user);
        var url = 'http://127.0.0.1:8000/api/v1/user/login/';

        $http.post(url, json)
            .success(function(data, status, headers, config) {
                $scope.loggedIn = true;
                $scope.currentUser = data;
                userData.setUser(data);
                $scope.user = null;
            })
            .error(function(data, status, headers, config) {
                console.log('User login [POST] error');
                console.log(status);
            });

    };

    //TODO
    $scope.logoutUser = function (user) {
        var json = JSON.stringify(user);
        var url = 'http://127.0.0.1:8000/api/v1/user/logout/';

        $http.get(url, json)
            .success(function(data, status, headers, config) {
                $scope.loggedIn = false;
                $scope.currentUser = 'Unknown';
                $scope.currentUserId = 0;
                userData.setId(0);
                $scope.user = null;
            })
            .error(function(data, status, headers, config) {
                console.log('User logout [POST] error');
                console.log(user);
                console.log(status);
                console.log(data);
            });

    };

}]);
