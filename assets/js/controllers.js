var Appc = angular.module('Controllers', []);

Appc.controller('HomeCtrl', ['$scope', '$http', '$location', 'youtubeService',
    function($scope, $http, $location, $youtube) {
        $scope.listVideo = {};

        window.initGapi = function() {
            $youtube.initService();
            $scope.search('Dogs');
        };

        $scope.changeTextbySearch = function(str) {
            $scope.listVideo = {};
            $youtube.initService();
            $scope.search(str);
        };

        $scope.search = function(str) {
            $youtube.searchVideo(str, function(resp) {
                resp.then(function(data) {
                    setTimeout(function() {
                        $scope.$apply(function() {
                            $scope.listVideo = data.items;
                        });
                    }, 2000);
                }, function(error) {
                    console.log('Failed: ' + error)
                });
            });
        };
    }
]);
