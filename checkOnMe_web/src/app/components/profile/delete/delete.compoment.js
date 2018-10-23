(function(angular) {
    'use strict';
    var profileAppDelete={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/profile/delete/delete.html',
        controller:'ProfileDeleteController',
    }

    angular.module('components.profile')
            .component('profileAppDelete',profileAppDelete);
})(window.angular);
