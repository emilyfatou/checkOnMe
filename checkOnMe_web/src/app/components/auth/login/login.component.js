(function(angular){

    'use strict'
    //define component object
    var login = {
               templateUrl:'app/components/auth/login/login.html',
               controller:'LoginController'
           }
    //Create component
    angular
        .module('components.auth')
        .component('login',login)
        .config(configLogin);
        configLogin.$inject = ['$stateProvider','$urlRouterProvider']
        function configLogin($stateProvider, $urlRouterProvider) {
          $stateProvider
            .state('auth', {
                      redirectTo: 'auth.login',
                      url: '/auth',
                      template: '<div ui-view></div>'
                    })
            .state('auth.login', {
                      url: '/login',
                      component: 'login'
                    });
          $urlRouterProvider.otherwise('/auth/login');
        }
})(window.angular)
