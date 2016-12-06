(function() {
    'use strict';

    angular.module('app')
        .controller('ContactUsController', ContactUsController);

    function ContactUsController() {

        var vm = this;

        vm.ContactMsg = function() {
            alert("Contact Sent");
        }
    }

})();