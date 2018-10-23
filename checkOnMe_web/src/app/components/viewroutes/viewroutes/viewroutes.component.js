(function(angular) {
    'use strict'
    //Create Outgoingmesssages component Object
    var viewroutes = {
        templateUrl: 'app/components/viewroutes/viewroutes/viewroutes.html',
        controller: 'ViewroutesController'
    }
    //Call angular component function with my module
    angular.module('components.viewroutes')
        .component('viewroutes', viewroutes)
        .config(viewroutesConfig);
    viewroutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']

    function viewroutesConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('viewroutes', {
                url: '/viewroutes',
                component: 'viewroutes',
                parent: 'app',
                data: {
                    requireLogin: true,
                    requireAdmin: true,
                }
            })
    }

})(window.angular);