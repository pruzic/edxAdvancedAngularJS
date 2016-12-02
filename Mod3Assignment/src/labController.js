(function() {
    'use strict';

    angular.module('app')
        .controller('labController', labController);

    function labController() {
        var vm = this;

        vm.alerts = [];

        vm.addDanger = function() {
            addAlert('danger', 'Danger, Will Robinson!, Danger!');
        };

        vm.addWarning = function() {
            addAlert('warning', 'Warning!, Warning! Alien approching!');
        };

        vm.dismissAlert = function(index) {
            vm.alerts.splice(index, 1);
        };

        function addAlert(type, text) {
            vm.alerts.push({ type: type, text: text });
        };

    }



})();