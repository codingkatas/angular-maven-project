'use strict';

namespace('codingkatas');

var appModule = angular.module('codingkatas', ['ngResource']);

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

appModule.config(['$httpProvider',
    function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
    }
]);


appModule.run(function ($rootScope) {

    $rootScope.showOverlay = false;
});





