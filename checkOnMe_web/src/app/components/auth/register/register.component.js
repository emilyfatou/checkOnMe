(function(angular) {
  'use strict';
    var register = {
      templateUrl:'app/components/auth/register/register.html',
      controller:'RegisterController'
    }

   angular.module('components.auth')
          .component('register',register)
          .config(registerConfig);
          registerConfig.$inject = ['$stateProvider','$urlRouterProvider'];

          function registerConfig($stateProvider,$urlRouterProvider){
              $stateProvider
                .state('auth.register',{
                    url:'/register',
                    component:'register',
                });
          }
})(window.angular);
