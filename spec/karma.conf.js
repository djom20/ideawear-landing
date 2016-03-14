module.exports = function(config) {
    config.set({
        basePath: '/',
        frameworks: ['jasmine', 'requirejs'],
        files: [
            'main.js',
            'libs/jquery/jquery-1.11.0.js',
            'node_modules/karma-ng-scenario/lib/angular-scenario.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'libs/angular/angular-route.min.js',
            'libs/angular/angular-route.min.js.map',
            'libs/firebase/firebase.js',
            'libs/firebase/angularfire.min.js',
            'http://apis.google.com/js/client.js?onload=init',
            'http://www.youtube.com/iframe_api', {
                pattern: 'libs/**/*.min.js',
                included: false
            }, {
                pattern: 'assets/js/*.min.js',
                included: false
            }, {
                pattern: 'spec/*.spec.js',
                included: false
            }
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};
