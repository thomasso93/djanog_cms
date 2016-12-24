var cms = angular.module('cms');

cms.service('userData', function () {
        var user;
        var loggedIn = false;
        var users;

        return {
            getLoggedIn: function () {
                return loggedIn;
            },
            setLoggedIn: function (value) {
                loggedIn = value;
            },
            getUser: function () {
                return user;
            },
            setUser: function(value) {
                user = value;
            },
            getUsers: function () {
                return users;
            },
            setUsers: function(value) {
                users = value;
            }
        };
});