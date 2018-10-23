(function(angular) {
    'use strict';
    function ProfileAppEditController(){
        var ctrl =this;
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
           ctrl.profile = ctrl.resolve.profile;

            console.log(ctrl.profile);
        };

        ctrl.ok = function () {
          ctrl.close({$value: ctrl.profile});
          console.log(ctrl.profile);     
        };

        ctrl.cancel = function () {
          ctrl.dismiss({$value: 'cancel'});
        };
    }


    angular.module('components.profile')
            .controller('ProfileAppEditController',ProfileAppEditController);
})(window.angular);
