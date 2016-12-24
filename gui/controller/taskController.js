var cms = angular.module('cms');

cms.controller('taskController', ['$scope', '$http', 'userData', function($scope, $http, userData) {

    $scope.userData = userData;

    $scope.users = $scope.loadUsers;

    $scope.loadTasks = function () {
        $http.get('http://127.0.0.1:8000/api/v1/task/?format=json').
        then(function(response) {
            var responseData = response.data;
            $scope.tasksFull = responseData;
            $scope.tasks = responseData.objects;
        });
    };

    $scope.saveTask = function(task) {
        task.assigned_to = "/api/v1/user/" + task.assignedTo + "/",
        task.created_by = "/api/v1/user/" + userData.getUser().id + "/";

        var json = JSON.stringify(task);
        var url = 'http://127.0.0.1:8000/api/v1/task/';

        $http.post(url, json)
            .success(function(data, status, headers, config) {
                $scope.loadTasks();
                $scope.task = null;
            })
            .error(function(data, status, headers, config) {
                console.log('Task [POST] error');
                console.log(status);
            });
    };

    $scope.loadUsers = function () {
        var url = 'http://127.0.0.1:8000/api/v1/user/'
        $http.get(url)
            .success(function(data, status, headers, config) {
                console.log(data);
                userData.setUsers(data.objects);
            })
            .error(function(data, status, headers, config) {
                console.log('get users error')
            })
    };


}]);