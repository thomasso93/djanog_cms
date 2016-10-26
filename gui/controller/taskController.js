var cms = angular.module('cms', []);

cms.controller('taskController', function($scope, $http) {
    $http.get('http://127.0.0.1:8000/api/v1/task/?format=json').
        then(function(response) {
            var responseData = response.data;
            $scope.tasksFull = responseData;
            $scope.tasks = responseData.objects;
        });
});