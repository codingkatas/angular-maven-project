'use strict';
/*global module, inject, describe, it, expect, trex, log */

describe('Controller: HomeCtrl', function () {

    // load the controller's module
    beforeEach(module('trex'));

    var HomeCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, RememberListService) {
        scope = $rootScope.$new();
        HomeCtrl = $controller(trex.controllers.HomeCtrl, {
            $scope: scope,
            RememberListService: RememberListService
        });
    }));

    it('should attach a list of todos to the scope', function () {
        expect(scope.todos.length).toBe(5);
    });
});
