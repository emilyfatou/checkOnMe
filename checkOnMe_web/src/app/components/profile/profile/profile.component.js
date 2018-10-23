(function(angular) {
    'use strict'
    //Create Outgoingmesssages component Object
    var profile = {
        templateUrl: 'app/components/profile/profile/profile.html',
        controller: 'ProfileController'
    }
    //Call angular component function with my module
    angular.module('components.profile')
        .component('profile', profile)
        .config(profileConfig);
    profileConfig.$inject = ['$stateProvider', '$urlRouterProvider']

    function profileConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('profile', {
                url: '/profile',
                component: 'profile',
                parent: 'app',
                data: {
                    requireLogin: false,
                    requireAdmin: false,
                }
            })
    }

})(window.angular);