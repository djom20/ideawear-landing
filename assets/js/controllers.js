var Appc = angular.module('Controllers', []);

Appc.controller('HomeCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        console.log("Init Controller HomeCtrl");

        $scope.changeTextbySearch = function(str) {
            console.log(str);
        };
    }
]);
