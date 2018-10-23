(function(angular, sessionStorage) {
    'use strict';

    function CoreController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope) {
        var ctrl = this;
        ctrl.users = [];
        $rootScope.$on('login', function(event, data) {
            console.log('response to login event');
        });
       
        ctrl.createUser = function(size) {
            $rootScope.$broadcast('core', {
                link: "auth/login"
            });
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/common/modal.html',
                controller: 'ModalController',
                controllerAs: '$ctrl',
                size: size
            });
            modalInstance.result.then(function(res) {
                console.log(res);
            })

        }
        ctrl.view = function(size, id) {
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/common/modal.html',
                controller: 'ModalController',
                controllerAs: '$ctrl',
                size: size,
                resolve: {
                    items: function() {
                        var user = {};
                        angular.forEach(ctrl.users, function(element) {
                            if (element.id === id) {
                                user = element;
                            }
                        });
                        return user;
                    }
                }
            });

            modalInstance.result.then(function(res) {
                console.log(res);
            })
        }
    }

    angular.module('common')
           .controller('CoreController', CoreController);

})(window.angular, window.sessionStorage);