var Apps = angular.module('Services', []);

Apps.service('youtubeService', ['$http', '$q', function($http, $q) {
    var deferred = $q.defer();
    this.googleApiClientReady = function() {
        gapi.client.setApiKey('AIzaSyD5FdTg5njakWsoONkTvdEFYumExi10V_o');
        gapi.client.load('youtube', 'v3', function() {
            var request = gapi.client.youtube.playlistItems.list({
                part: 'snippet',
                playlistId: 'PLila01eYiSBjOtR8oqXkY0i5c1QS6k2Mu',
                maxResults: 8
            });
            request.execute(function(response) {
                deferred.resolve(response.result);
            });
        });
        return deferred.promise;
    };
}])
