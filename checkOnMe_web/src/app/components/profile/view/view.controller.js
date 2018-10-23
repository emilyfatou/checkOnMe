(function(angular) {
    'use strict';
    function ProfileAppViewController(){
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
            .controller('ProfileAppViewController',ProfileAppViewController);
})(window.angular);
