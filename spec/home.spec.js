'use strict';

describe('YoutubeApp', function() {
    var $ctrl, $http, $scope, $rootScope, $youtube, HomeCtrl = null;

    beforeAll(function() {
        angular.module('App');
    });

    beforeEach(function() {
        browser().navigateTo('/');
    });

    // beforeEach(inject(function($injector) {
    //     $rootScope = $injector.get('$rootScope');
    //     $http = $injector.get('$httpBackend');
    //     $location = $injector.get('$location');
    //     $youtube = $injector.get('youtubeService');

    //     HomeCtrl = function() {
    //         return $ctrl('HomeCtrl', {
    //             '$scope': $rootScope.$new(),
    //             '$http': $http,
    //             '$location': $location,
    //             '$youtube': $youtube
    //         });
    //     };
    // }));

    // beforeEach(
    // inject(
    // function(_$rootScope_, _$controller_) {
    // $scope = _$rootScope_.$new();
    // $ctrl = _$controller_;

    // HomeCtrl = $ctrl('HomeCtrl', {
    //     '$rootScope': $rootScope,
    //     '$scope': $scope
    // });
    // }
    // )
    // );

    describe('Routes', function() {
        it('Should change route when type /login', inject(
            function($locationProvider) {
                $locationProvider.html5Mode(false);
            },
            function($location) {
                browser().navigateTo('#/login');
                expect($location().path()).toBe('/');
            }
        ));
    });

    describe('Controller', function() {
        it('Should have a Module called Controllers', function() {
            expect(angular.module('Controllers')).toBeDefined();
        });
    });

    describe('View', function() {
        it('Should have a input called inputSearch', function() {
            // expect(element('inputSearch')).toBeDefined();
            // expect(element('.inputSearch')).toBeDefined();
            // expect(element('#inputSearch')).toBeDefined();
        });

        it('Should search the text "Dogs" ', function() {
            // element('inputSearch').enter('Dogs');
            // element('inputSearch').val('Dogs');
            // element('inputSearch').text('Dogs');
            // element('inputSearch').html('Dogs');
            // expect(element('inputSearch').val()).toBe('Dogs');
        });
    });
});
