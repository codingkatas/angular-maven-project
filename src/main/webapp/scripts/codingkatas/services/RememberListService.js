'use strict';
/*global appModule */

appModule.factory('RememberListService', ['$resource', function ($resource) {

    //just temporary...
    var t = $resource('v1/RememberList');
    log(t);

    var query = function () {

        var todos = [
            {subject: 'subj1'},
            {subject: 'subj2'},
            {subject: 'subj3'},
            {subject: 'subj4'},
            {subject: 'subj5'}
        ];

        return todos;

    };

    return {
        query: query
    };


    //return $resource('v10/RememberList');
}]);
