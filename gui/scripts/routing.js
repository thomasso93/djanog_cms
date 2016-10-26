var cms = angular.module('cms', []);

cms.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'index.html',
        })
        .when('/tasks', {
            templateUrl : 'pages/tasks.html',
            controller  : 'taskController'
        })
        .when('/error', {
            templateUrl : 'pages/error.html',
        })
        .otherwise({ redirectTo: '/error'});
});