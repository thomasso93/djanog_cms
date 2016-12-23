angular.module('cms', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
//            controller  : 'mainController'
        })
        .when('/tasks', {
            templateUrl : 'pages/tasks.html',
            controller  : 'taskController'
        })
        .when('/articles', {
            templateUrl : 'pages/articles.html',
            controller : 'articleController'
        });

//    $locationProvider.html5Mode(true);
});