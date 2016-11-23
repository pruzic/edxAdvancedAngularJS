(function() {
    'use strict';

    angular.module('app').factory('sessionFactory', sessionFactory);

    sessionFactory.$inject = ['$window'];

    function sessionFactory($window) {

        return {
            save: save,
            get: get,
            clear: clear
        }

        function save(key, value) {
            $window.sessionStorage.setItem(key, value);
        }

        function get(key) {
            return $window.sessionStorage.getItem(key);
        }

        function clear() {
            $window.sessionStorage.clear();
        }

    } //end of factory

})();