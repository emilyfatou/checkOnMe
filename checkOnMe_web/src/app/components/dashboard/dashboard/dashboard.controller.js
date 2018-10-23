(function(angular) {
    'use strict'

    function DashboardController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope) {
        var ctrl = this;
        ctrl.users = [];
        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;
        $scope.googleUrl = 'http://google.com';
        // $http.get('/users').then(function(res) {
        //     ctrl.users = res.data;
        // })
        
    }
   angular.module('components.dashboard')
        .controller('DashboardController', DashboardController);
})(window.angular)