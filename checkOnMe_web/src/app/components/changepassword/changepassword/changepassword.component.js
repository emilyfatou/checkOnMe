(function(angular) {
    'use strict'
    //Create Outgoingmesssages component Object

    var changepassword = {
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        templateUrl: 'app/components/changepassword/changepassword/changepasswordmodal.html',
        controller: 'ChangepasswordController'
    }
    //Call angular component function with my module
    angular.module('components.changepassword')
        .component('changepassword', changepassword)
   
})(window.angular);