(function() {

    'use strict';

    var app = angular.module('app', [])
        .controller('myController', myController)
        .directive('myDirective', myDirective);

    myController.$inject = ['$scope'];

    function myController($scope) {
        var cntr = this;

        $scope.customer = {
            name: 'Peter Rozic',
            address: '16401 Greenleaf',
            city: 'Tampa Bay',
            state: 'FL'
        };

        cntr.person = {

            name: 'Stana Ruzic',
            penName: 'Stana Vukovljak'
        };

        cntr.show = show;

        function show() {
            alert(JSON.stringify(cntr.person));
        }
    }



    function myDirective() {

        return {
            // templateUrl: 'my-directive.html'
            templateUrl: function(elem, attr) {
                return 'customer-' + attr.type + '.html';
            }
        };

    }



})();