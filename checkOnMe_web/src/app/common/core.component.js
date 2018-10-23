(function(angular){

    'use strict'
    var core = {
        templateUrl: "app/common/core.html",
        controller:"CoreController"
    }
    angular.module('common')
           .component('core',core)
           .config(configCore);
           configCore.$inject = ['$stateProvider','$urlRouterProvider']
           function configCore($stateProvider,$urlRouterProvider){
               $stateProvider
               .state('app',{
                   abstract:true,
                   component:'core',
                   data:{
                        requireLogin:false,
                        requireAdmin:false,
                 }
              });
            }

})(window.angular);