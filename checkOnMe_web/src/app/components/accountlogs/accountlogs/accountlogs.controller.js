(function(angular) {
    'use strict'

    function AccountlogsController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope) {
        var ctrl = this;
        ctrl.users = [];
            $http.get(getUsersURL).then(function(res) {
                ctrl.users = res.data;
                console.log(ctrl.users);
            })
            ctrl.view = function(size, user) {

            var modalInstance = $uibModal.open({
                    component: 'userLogView',
                    resolve: {
                        user: function() {
                            return user;
                        }
                    }
                });
            
            }
    }

    angular.module('components.accountlogs')
           .controller('AccountlogsController', AccountlogsController);
})(window.angular)