(function(angular) {
    'use strict';
    var profileAppEdit={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/profile/edit/edit.html',
        controller:'ProfileAppEditController',
    }

    angular.module('components.profile')
            .component('profileAppEdit',profileAppEdit);
})(window.angular);
