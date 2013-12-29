'use strict';

namespace('trex.controllers');

trex.controllers.HomeCtrl = function ($scope, RememberListService) {

    $scope.todos = RememberListService.query();

};

