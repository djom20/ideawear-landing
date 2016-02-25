var Appc = angular.module('Controllers', []);

Appc.controller('HomeCtrl', ['$scope', '$http', '$location', 'youtubeService',
    function($scope, $http, $location, $youtube) {
        console.log("Init Controller HomeCtrl");

        $scope.listVideo = {};

        $scope.initGapi = function() {
            $youtube.initService();
            $scope.search('AngularJs');
        };

        $scope.changeTextbySearch = function(str) {
            console.log(str);

            $scope.listVideo = {};
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

        $scope.initGapi();
    }
]);
