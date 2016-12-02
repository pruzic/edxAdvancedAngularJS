(function() {
    'use strict';

    angular.module('app')
        .controller('datePickerPopupController', datePickerPopupController);

    // datePickerPopupController.$inject = ['$scope'];

    function datePickerPopupController() {
        var datePckr = this;

        datePckr.today = function() {
            datePckr.dt = new Date();
        };

        datePckr.today();

        datePckr.clear = function() {
            datePckr.dt = null;
        };

        datePckr.inlineOptions = {
            customeClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        }

        datePckr.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        datePckr.dateOptions = {
            dateDisabled: disabled,
            showWeeks: false,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        datePckr.toggleMin = function() {
            // datePckr.inlineOptions.minDate = datePckr.inlineOptions.minDate ? null : new Date();
            var currDate = Today(); // new Date();

            var dat = currDate;
            console.log('Min Date Set: ' + dat);
            // datePckr.dateOptions.minDate = datePckr.inlineOptions.minDate;
            datePckr.dateOptions.minDate = dat;
        };

        datePckr.toggleMin();

        datePckr.open1 = function() {
            datePckr.popup1.opened = true;
        };

        datePckr.open2 = function() {
            datePckr.popup2.opened = true;
        };

        datePckr.setDate = function(year, month, day) {
            datePckr.dt = new Date(year, month, day);
        };

        datePckr.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        datePckr.format = datePckr.formats[0];
        datePckr.altInputFormats = ['M!/d!/yyyy'];

        datePckr.popup1 = {
            opened: false
        };

        datePckr.popup2 = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        datePckr.events = [{
                date: tomorrow,
                status: 'full'
            },
            {
                date: afterTomorrow,
                status: 'partially'
            }
        ];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < datePckr.events.length; i++) {
                    var currentDay = new Date(datePckr.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return datePckr.events[i].status;
                    }
                }
            }

            return '';
        }
    } //end of controller

})();