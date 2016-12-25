angular.module('cms').controller('mainController', ['$scope', '$http', 'userData', function($scope, $http, userData) {

    $scope.userData = userData;

    $scope.loadNews = function () {
        $http.get('http://127.0.0.1:8000/api/v1/news/?format=json').
        then(function(response) {
            var responseData = response.data;
            $scope.newsFull = responseData;
            $scope.news = responseData.objects;
        });
    };


}]);