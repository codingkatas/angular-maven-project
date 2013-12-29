'use strict';
/*global module, inject, describe, it, expect, codingkatas, log */

describe('Controller: HomeCtrl', function () {

    // load the controller's module
    beforeEach(module('codingkatas'));

    var HomeCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, RememberListService) {
        scope = $rootScope.$new();
        HomeCtrl = $controller(codingkatas.controllers.HomeCtrl, {
            $scope: scope,
            RememberListService: RememberListService
        });
    }));

    it('should attach a list of todos to the scope', function () {
        expect(scope.todos.length).toBe(5);
    });
});
