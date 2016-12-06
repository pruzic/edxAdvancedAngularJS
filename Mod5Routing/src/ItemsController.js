(function() {

    'use strict';

    angular.module('app')
        .controller('ItemsController', ItemsController);

        function ItemsController(){
            var vm = this;

            vm.items = ['First', 'Second', 'Third'];
        }
})();