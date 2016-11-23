(function() {
    'use strict';

    angular.module('app').service('sessionService', sessionService);

    sessionService.$inject = ['$window'];

    function sessionService($window) {

        var srvc = this;

        srvc.save = save;
        srvc.get = get;
        srvc.clear = clear;

        function save(key, value) {
            console.log('From Save service');
            $window.sessionStorage.setItem(key, value);
        }

        function get(key, value) {
            console.log("From get service: " + key);
            return $window.sessionStorage.getItem(key);
        }

        function clear() {
            $window.sessionStorage.clear();
        }


    } //end of service


})();