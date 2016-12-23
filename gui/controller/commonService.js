var cms = angular.module('cms');

cms.service('userData', function () {
        var user;

        return {
            getUser: function () {
                return user;
            },
            setUser: function(value) {
                user = value;
            }
        };
    });