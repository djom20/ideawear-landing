// Karma configuration
// Generated on Fri Mar 11 2016 11:43:39 GMT-0500 (COT)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'ng-scenario',
            'jasmine'
        ],


        // list of files / patterns to load in the browser
        files: [
            'libs/jquery/jquery-1.11.0.js',
            'node_modules/karma-ng-scenario/lib/angular-scenario.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'libs/angular/angular-route.min.js',
            'libs/angular/angular-route.min.js.map',
            'libs/firebase/firebase.js',
            'libs/firebase/angularfire.min.js',
            'http://apis.google.com/js/client.js?onload=init',
            'http://www.youtube.com/iframe_api',
            'assets/js/*.min.js',
            'spec/*.spec.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
