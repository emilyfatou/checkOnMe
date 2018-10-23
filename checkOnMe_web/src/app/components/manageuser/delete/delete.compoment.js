(function(angular) {
    'use strict';
    var userAppDelete={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/manageuser/delete/delete.html',
        controller:'UserDeleteController',
    }

    angular.module('components.manageuser')
            .component('userAppDelete',userAppDelete);
})(window.angular);
