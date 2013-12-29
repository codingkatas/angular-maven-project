'use strict';

namespace('codingkatas.controllers');

codingkatas.controllers.HomeCtrl = function ($scope, RememberListService) {

    $scope.todos = RememberListService.query();

};

