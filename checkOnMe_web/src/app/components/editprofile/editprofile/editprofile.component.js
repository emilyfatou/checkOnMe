(function(angular) {
    'use strict'
    //Create Outgoingmesssages component Object

    var editprofile = {
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        templateUrl: 'app/components/editprofile/editprofile/editprofilemodal.html',
        controller: 'EditprofileController'
    }
    //Call angular component function with my module
    angular.module('components.editprofile')
        .component('editprofile', editprofile)
   
})(window.angular);