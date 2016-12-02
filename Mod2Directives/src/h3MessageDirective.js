(function() {
    'use strict';

    angular.module('app')
        .directive('h3MessageDirective', h3MessageDirective);


    function h3MessageDirective() {

        return {
            scope: {
                title: '@'
            },
            restrict: 'EA',
            replace: true,
            template: '<h3>{{title}}</h3>',
            link: function(scope, element, attrs) {
                element.bind('mouseenter', function() {
                    // console.log('Inside mouseenter event');
                    element.css('color', 'goldenrod');
                    element.css('background-color', 'red');
                });

                element.bind('mouseleave', function() {
                    // console.log('Outside of mouseenter event');
                    element.css('color', 'sienna');
                    element.css('background-color', 'silver');
                });
            }
        };
    }

})();