(function(angular) {
    'use strict';

    function RouteModalController($uibModalInstance, items, $stateParams, AuthService, $http, $uibModal, $scope, $rootScope) {

        var $ctrl = this;
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
            ctrl.user = ctrl.resolve.user;

            console.log(ctrl.user);
        };
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude, position.coords.longitude);

            ctrl.osloCenter = {
                lat: 9.0133,
                lng: 38.77999,
                zoom: 100
            };
            ctrl.markers = {
                osloMarker: {
                    lat: 9.0133,
                    lng: 38.77999,
                    message: "The Location of Injured Person!!",
                    focus: true,
                    draggable: true
                }
            };
        });
        
        $ctrl.ok = function() {
            $uibModalInstance.close({
                value: "sent from the modal"
            });
        };
        $ctrl.cancel = function() {
            $uibModalInstance.close({});
        };

    };


    angular.module('components.viewroutes')
        .controller('RouteModalController', RouteModalController);
})(window.angular);