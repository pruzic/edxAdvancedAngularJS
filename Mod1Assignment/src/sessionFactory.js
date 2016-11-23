(function() {
    'use strict';

    angular.module('app').factory('sessionFactory', sessionFactory);

    sessionFactory.$inject = ['$window', 'formattingFactory'];

    function sessionFactory($window, formattingFactory) {

        return {
            save: save,
            get: get,
            clear: clear
        }

        function save(key, value) {
            var frmValu = formattingFactory.formattedVal(value);
            // console.log('New Value: ' + frmValu);
            $window.sessionStorage.setItem(key, frmValu);
        }

        function get(key) {
            return $window.sessionStorage.getItem(key);
        }

        function clear() {
            $window.sessionStorage.clear();
        }

    } //end of factory

})();