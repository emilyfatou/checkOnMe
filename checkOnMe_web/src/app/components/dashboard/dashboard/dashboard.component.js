(function(angular) {
    'use strict'
    //Create Outgoingmesssages component Object
    var dashboard = {
        templateUrl: 'app/components/dashboard/dashboard/dashboard.html',
        controller: 'DashboardController'
    }
    //Call angular component function with my module
    angular.module('components.dashboard')
        .component('dashboard', dashboard)
        .config(dashboardConfig);
    dashboardConfig.$inject = ['$stateProvider', '$urlRouterProvider']

    function dashboardConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('dashboard', {
               
                url: '/',
                component: 'dashboard',
                parent: 'app',
                data: {
                    requireLogin: false,
                    requireAdmin: false,
                }

            })
      }

})(window.angular);