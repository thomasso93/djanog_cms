angular.module('cms', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'home.html',
//            controller  : 'mainController'
        })
        .when('/tasks', {
            templateUrl : 'tasks.html',
            controller  : 'taskController'
        })
        .when('/articles', {
            templateUrl : 'articles.html',
            controller : 'articleController'
        });

//    $locationProvider.html5Mode(true);
});