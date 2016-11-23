(function() {
    'use strict';

    angular.module('app').controller('sessionController', sessionController);


    sessionController.$inject = ['sessionFactory'];

    function sessionController(sessionFactory) {
        var vm = this;

        vm.getFactorySession = function() {
            vm.model = {
                name: sessionFactory.get('name'),
                nickname: sessionFactory.get('nickname'),
                status: 'Retrieved by Factory on ' + new Date()
            };
        }

        vm.setFactorySession = function() {

            console.log(vm.model.name);

            sessionFactory.save('name', vm.model.name);
            sessionFactory.save('nickname', vm.model.nickname);
            // vm.getServiceSession();
        }

        vm.clearFactorySession = function() {
            sessionFactory.clear();
            vm.getFactorySession();
        }

    } //end of controller

})();