(function(angular) {
    'use strict';
    var profileAppCreate={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/profile/create/create.html',
        controller:'ProfileAppCreateController',
    }

    angular.module('components.profile')
            .component('profileAppCreate',profileAppCreate);
})(window.angular);
