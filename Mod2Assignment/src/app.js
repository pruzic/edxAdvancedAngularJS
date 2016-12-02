(function() {

    'use strict';

    var app = angular.module('app', [])
        .controller('myController', myController);

    // myController.$inject = ['$scope', '$index'];

    function myController() {
        var cntr = this;

        cntr.person = [{
                id: 0,
                name: 'Stana Ruzic',
                nationality: 'Serbian',
                dates: '1975-2099'
            },
            {
                id: 1,
                name: 'Predrag Ruzic',
                nationality: 'Serbian',
                dates: '1966-2099'
            }
        ];

        cntr.show = function(index) {
            console.log("index: " + index);

            alert("Show details for: " + cntr.person[index].name);
        }
    }

})();