'use strict';

namespace('codingkatas');

var appModule = angular.module('codingkatas', ['ngResource', 'ui.router']);

appModule.factory('httpInterceptor', function ($q, $rootScope) {

    return {

        // optional method
        'request': function (config) {
            $rootScope.showOverlay = true;
            return config || $q.when(config);
        },

        // optional method
        'requestError': function (rejection) {
            $rootScope.showOverlay = false;
            return $q.reject(rejection);
        },

        // optional method
        'response': function (response) {
            $rootScope.showOverlay = false;
            return response || $q.when(response);
        },

        // optional method
        'responseError': function (rejection) {
            $rootScope.showOverlay = false;
            return $q.reject(rejection);
        }
    };
});

appModule.config(['$httpProvider', '$stateProvider',
    function ($httpProvider, $stateProvider) {
        $httpProvider.interceptors.push('httpInterceptor');

        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    'sub1': {
                        templateUrl: 'views/sub1.html'
                    },
                    'sub2': {
                        templateUrl: 'views/sub2.html'
                    }
                }
            });
    }
])
;


appModule.run(function ($rootScope) {
    $rootScope.showOverlay = false;
});





