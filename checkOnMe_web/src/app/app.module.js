(function(angular) {
  'use strict';

  angular.module('mainApp',[
                            'components',
                            'common',
                            // 'ngMockE2E',
                            // 'jsf',
                            'ngMaterial',
                            'nvd3',
                            'leaflet-directive',
                            'ngLoadingSpinner',
                            'ui.tinymce',
    
                              ])


          .config(['$httpProvider', function ($httpProvider) {
              $httpProvider.interceptors.push('HeaderInterceptor');
              console.log("Configuration Hook");
            }])
            .run(['$http', '$rootScope', function ($http, $rootScope) {
              if (typeof $rootScope.global === "undefined") {
                if (localStorage.getItem('user')) {
                  $rootScope.global = {
                    user: JSON.parse(localStorage.getItem('user')),
                        }
                      }
                    }
                   

                console.log('run app Block');
            }])
})(window.angular, window.localStorage);
