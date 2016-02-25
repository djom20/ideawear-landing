var Appd = angular.module('Directives', []);

Appd.directive('youtube', function($window) {
    return {
        restrict: "E",
        scope: {
            videoid: "@",
            class: "@"
        },

        template: '<div></div>',

        link: function(scope, element) {
            var player = null;

            player = new YT.Player(element.children()[0], {
                playerVars: {
                    autoplay: 0,
                    html5: 1,
                    enablejsapi: 1,
                    theme: "light",
                    modesbranding: 0,
                    color: "white",
                    iv_load_policy: 3,
                    showinfo: 1,
                    controls: 1,
                    origin: 'https://ideawear-landing.firebaseapp.com'
                },
                videoId: scope.videoid,
                class: scope.class
            });
        },
    }
});
