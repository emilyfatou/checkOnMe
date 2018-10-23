(function(angular) {
    'use strict';
    var userAppEdit={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/manageuser/edit/edit.html',
        controller:'UserEditController',
    }

    angular.module('components.manageuser')
            .component('userAppEdit',userAppEdit);
})(window.angular);
