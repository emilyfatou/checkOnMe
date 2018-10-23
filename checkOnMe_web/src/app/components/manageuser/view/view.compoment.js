(function(angular) {
    'use strict';
    var userAppView={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/manageuser/view/view.html',
        controller:'UserAppViewController',
    }

    angular.module('components.manageuser')
            .component('userAppView',userAppView);
})(window.angular);
