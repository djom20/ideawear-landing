var Apps = angular.module('Services', []);

Apps.service('youtubeService', ['$http', '$q', function($http, $q) {
    var _deferred = $q.defer(),
        _maxResults = 12, //min 1, Max 50
        _gapi = null,
        _request = null,
        _myApiKey = 'AIzaSyD5FdTg5njakWsoONkTvdEFYumExi10V_o';

    this.initService = function() {
        try {
            if (gapi) {
                gapi.client.setApiKey(_myApiKey); // Set Api ket by Default
                _gapi = gapi;
            }
        } catch (err) {
            console.log('Error, no se cargo la libreria de la api de Google.')
        }
    };

    this.search = function(_qSearch, $callback) {
        try {
            _gapi.client.load('youtube', 'v3', function() {
                if (_request != null) {
                    _request = null;
                    _deferred = $q.defer();
                }

                _request = _gapi.client.youtube.search.list({
                    'maxResults': _maxResults,
                    'part': 'snippet',
                    'type': 'video',
                    'q': encodeURIComponent(_qSearch).replace(/%20/g, "+")
                });

                _request.execute(function(resp) {
                    _deferred.resolve(resp.result);
                    console.info('resp', resp);
                    console.info('result', resp.result);
                    console.info('_deferred', _deferred.promise);
                });

                $callback(_deferred.promise);
            });
        } catch (err) {
            console.log('Error, no se cargo la libreria de la api de Google.')
        }
    };

    this.searchVideo = function(_qSearch, $callback) {
        this.search(_qSearch, $callback);
    };
}])
