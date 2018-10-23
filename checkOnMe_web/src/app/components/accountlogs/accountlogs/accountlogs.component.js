(function(angular) {
    'use strict'
    
    var accountlogs = {
        templateUrl: 'app/components/accountlogs/accountlogs/accountlogs.html',
        controller: 'AccountlogsController'
    }
    
    angular.module('components.accountlogs')
           .component('accountlogs', accountlogs)
           .config(accountlogsConfig);
    accountlogsConfig.$inject = ['$stateProvider', '$urlRouterProvider']

    function accountlogsConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('accountlogs', {
                url: '/accountlogs',
                component: 'accountlogs',
                parent: 'app',
                data: {
                    requireLogin: true,
                    requireAdmin: true,
                }
            })
    }

})(window.angular);