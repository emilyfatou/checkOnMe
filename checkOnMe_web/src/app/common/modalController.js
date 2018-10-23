(function(angular) {
    'use strict';

    function ModalController($uibModalInstance, items) {
        
        console.log(items);
        var $ctrl = this;
        $ctrl.user = items;
        $ctrl.ok = function() {
            $uibModalInstance.close({
                value: "sent from the modal"
            });
          };
        $ctrl.cancel = function() {
            $uibModalInstance.close({});
        };
     };

 angular.module('common')
        .controller('ModalController', ModalController);
})(window.angular);