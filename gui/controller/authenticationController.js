var cms = angular.module('cms');

cms.controller('authenticationController', ['$scope', '$http', 'userData', function($scope, $http, userData) {

    $scope.userData = userData;

    $scope.loginUser = function (user) {
        var json = JSON.stringify(user);
        var url = 'http://127.0.0.1:8000/api/v1/user/login/';

        $http.post(url, json)
            .success(function(data, status, headers, config) {
                userData.setLoggedIn(true);
                userData.setUser(data);
                $scope.user = null;
            })
            .error(function(data, status, headers, config) {
                console.log('User login [POST] error');
                console.log(status);
            });

    };

    $scope.logoutUser = function () {
        var user = userData.getUser();
        var json = JSON.stringify(user);
        var url = 'http://127.0.0.1:8000/api/v1/user/logout/';

        $http.post(url, json)
            .success(function(data, status, headers, config) {
                userData.setLoggedIn(false);
                userData.setUser(null);
            })
            .error(function(data, status, headers, config) {
                console.log('User logout [POST] error');
                console.log(user);
            });

    };

}]);
