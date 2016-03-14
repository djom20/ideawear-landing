require.config({
    baseUrl: '/',
    paths: {
        angular: '../libs/angular/angular.min.js'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
})
