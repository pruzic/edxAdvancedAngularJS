(function() {
    'use strict';

    angular.module('app')
        .directive('person', person);

    function person() {
        return {
            scope: {
                person: '=',
                action: '&'
            },
            restrict: 'E',
            // template: '<h3>{{person.name}}</h3><h4>{{person.penName}}</h4>'
            template: 'Pen Name: <input type="text" ng-model="person.name" class="form-control" />  </br>' +
                'Pen Name: <input type="text" ng-model="person.penName" class="form-control" /> </br>' +
                '<input type="button" ng-click="action()" value="Action" class="btn btn-primary" /> </br>' +
                '<pre>{{person | json}}</pre> '
        };


    }

})();