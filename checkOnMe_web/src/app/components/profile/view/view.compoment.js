(function(angular) {
    'use strict';
    var profileAppView={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/profile/view/view.html',
        controller:'ProfileAppViewController',
    }

    angular.module('components.profile')
            .component('profileAppView',profileAppView);
})(window.angular);
