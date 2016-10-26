var cms = angular.module('cms', []);

cms.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'index.html',
//            controller  : 'mainController'
        })

        .when('/tasks', {
            templateUrl : 'tasks.html',
            controller  : 'taskController'
        });
});