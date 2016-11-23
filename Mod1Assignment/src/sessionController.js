(function() {
    'use strict';

    angular.module('app').controller('sessionController', sessionController);


    sessionController.$inject = ['sessionService', 'sessionFactory'];

    function sessionController(sessionService, sessionFactory) {
        var vm = this;

        vm.getFactorySession = function() {
                vm.model = {
                    name: sessionFactory.get('name'),
                    nickname: sessionFactory.get('nickname'),
                    status: 'Retrieved by Factory on ' + new Date()
                };
            } //end of Get Factory call

        vm.getServiceSession = function() {

                vm.model = {
                    name: sessionService.get('name'),
                    nickname: sessionService.get('nickname'),
                    status: 'Retrieved by Service on ' + new Date()
                };
            } //end of Get Service call

        vm.setFactorySession = function() {

                console.log(vm.model.name);

                sessionFactory.save('name', vm.model.name);
                sessionFactory.save('nickname', vm.model.nickname);
                // vm.getServiceSession();
            } //End of Set Factory call

        vm.setServiceSession = function() {
                console.log('From setServiceSesson');
                sessionService.save('name', vm.model.name);
                sessionService.save('nickname', vm.model.nickname);
                //vm.getServiceSession();
            } //End of Set Service call

        vm.clearFactorySession = function() {
            sessionFactory.clear();
            vm.getFactorySession();
        }

        vm.clearServiceSession = function() {
            sessionService.clear();
            vm.getServiceSession();
        }

    } //end of controller

})();