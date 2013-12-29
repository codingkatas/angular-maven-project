'use strict';
/*global module, inject, describe, it, expect, trex, log */

describe('RememberListService tests', function () {

    beforeEach(function () {
        module('trex');
    });

    describe('Test that RememberListService returns a list of RememberList resources', function () {

        var service;

        beforeEach(inject(function ($controller, $rootScope, RememberListService) {
            service = RememberListService;
        }));

        it('should get a list of ToDos from the service', function () {

            var todos = service.query();
            expect(todos.length).toBe(5);
        });

    });


});