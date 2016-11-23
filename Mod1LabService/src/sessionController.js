(function() {
    'use strict';

    angular.module('app').controller('sessionController', sessionController);


    sessionController.$inject = ['sessionService'];

    function sessionController(sessionService) {
        var vm = this;

        vm.getServiceSession = function() {
            vm.model = {
                name: sessionService.get('name'),
                nickname: sessionService.get('nickname'),
                status: 'Retrieved by service on ' + new Date()
            };
        }

        vm.setServiceSession = function() {

            console.log(vm.model.name);

            sessionService.save('name', vm.model.name);
            sessionService.save('nickname', vm.model.nickname);
            // vm.getServiceSession();
        }

        vm.clearServiceSession = function() {
            sessionService.clear();
            vm.getServiceSession();
        }

    } //end of controller

})();