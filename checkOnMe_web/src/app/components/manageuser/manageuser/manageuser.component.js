(function(angular) {
    'use strict'
    //Create Outgoingmesssages component Object
    var manageuser = {
        templateUrl: 'app/components/manageuser/manageuser/manageuser.html',
        controller: 'ManageuserController'
    }
    //Call angular component function with my module
    angular.module('components.manageuser')
           .component('manageuser', manageuser)
           .config(manageuserConfig);
    manageuserConfig.$inject = ['$stateProvider', '$urlRouterProvider']

    function manageuserConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('manageuser', {
                url: '/manageuser',
                component: 'manageuser',
                parent: 'app',
                data: {
                    requireLogin: true,
                    requireAdmin: true,
                }
            })
    }

})(window.angular);