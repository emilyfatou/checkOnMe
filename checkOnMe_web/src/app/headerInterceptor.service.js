(function (angular) {
    'use strict';
    function HeaderInterceptor($rootScope) {

        var interceptor = {
            
            request: request,
        }

        function request(config) {
            if ($rootScope.hasOwnProperty('global') && ($rootScope.global.hasOwnProperty('user')) ) {
                config.headers['Authorization'] = 'Bearer ' + $rootScope.global.user.token;
            }
            
             return config;
        }
        
        return interceptor;
    }

    angular.module('mainApp')
        .factory('HeaderInterceptor', HeaderInterceptor);

})(window.angular)