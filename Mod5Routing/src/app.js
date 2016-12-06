(function() {
    'use strict';

    angular.module('app', ['ngRoute'])
        .config(appConfig);


    appConfig.$inject = ['$routeProvider', '$locationProvider'];

    function appConfig($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/items/', {
                templateUrl: '/items/index.html',
                controller: 'ItemsController',
                controllerAs: 'vm'
            })
            .when('/', {
                templateUrl: '/home/index.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            })
    }

})();