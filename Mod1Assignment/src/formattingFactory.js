(function() {
    'use strict';

    angular.module('app').factory('formattingFactory', formattingFactory);

    function formattingFactory() {
        var formatting = this;

        return {
            formattedVal: formattedVal
        }

        function formattedVal(value) {
            var valLen = value.length;
            // console.log(valLen);
            if (valLen != undefined) {
                if (valLen % 2 === 0) {
                    return value.toUpperCase();
                } else {
                    return value.toLowerCase();
                }
            } else {
                return value;
            }
        }
    }

})()