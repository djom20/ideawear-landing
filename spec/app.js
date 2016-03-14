define(['angular'], function(angular) {
    var module = angular.module('app', []);
    module.config([
        '$controllerProvider',
        '$compileProvider',
        '$provide',
        function($controllerProvider, $compileProvider, $provide) {
            module.controller = $controllerProvider.register;
            module.directive = $compileProvider.directive;
            module.factory = $provide.factory;
            module.service = $provide.service;
        }
    ]);

    return module;
});
