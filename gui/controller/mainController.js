angular.module('cms').controller('mainController', ['$scope', '$http', 'userData', function($scope, $http, userData) {

    $scope.userData = userData;

}]);