(function(angular) {
    'use strict';
    function UserEditController(){
        var ctrl =this;
        ctrl.$onInit = function(){
          console.log("Controller is being initialized");
          ctrl.user = ctrl.resolve.user;
          console.log(ctrl.user);
          console.log(ctrl.user._id);
        };

        ctrl.ok = function () {
          ctrl.close({$value: ctrl.user});
          console.log(ctrl.user);     
        };

        ctrl.cancel = function () {
          ctrl.dismiss({$value: 'cancel'});
        };
    }


    angular.module('components.manageuser')
            .controller('UserEditController',UserEditController);
})(window.angular);
