var cms = angular.module('cms');

cms.controller('taskController', function($scope, $http) {
//    $http.get('http://127.0.0.1:8000/api/v1/task/?format=json').
//        then(function(response) {
//            var responseData = response.data;
//            $scope.tasksFull = responseData;
//            $scope.tasks = responseData.objects;
//        });

    $scope.loadTasks = function () {
        $http.get('http://127.0.0.1:8000/api/v1/task/?format=json').
        then(function(response) {
            var responseData = response.data;
            $scope.tasksFull = responseData;
            $scope.tasks = responseData.objects;
        });
    };

    $scope.saveTask = function(task) {
        //TODO remove hardcoded user assignement when user management works properly
        task.assigned_to = "/api/v1/user/3/",
        task.created_by = "/api/v1/user/3/"

        var json = JSON.stringify(task);
        var url = 'http://127.0.0.1:8000/api/v1/task/';

        $http.post(url, json)
            .success(function(data, status, headers, config) {
                $scope.loadTasks();
            })
            .error(function(data, status, headers, config) {
                console.log('Task [POST] error');
                console.log(status);
            });

    };


});