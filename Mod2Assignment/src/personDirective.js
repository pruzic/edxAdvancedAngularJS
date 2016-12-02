(function() {
    'use strict';

    angular.module('app')
        .directive('person', person);

    function person() {
        return {
            scope: {
                list: '=',
                action: '&'
            },
            replace: true,
            restrict: 'E',
            templateUrl: 'person.html',
            link: function(scope, element, attrs) {
                element.bind('mouseenter', function() {
                    element.css('color', 'goldenrod');
                    element.css('background-color', 'red');
                });

                element.bind('mouseleave', function() {
                    element.css('color', 'sienna');
                    element.css('background-color', 'silver');
                });
            }
        };


    }

})();