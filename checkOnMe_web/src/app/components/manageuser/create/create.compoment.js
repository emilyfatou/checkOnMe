(function(angular) {
    'use strict';
    var manageuserAppCreate={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/manageuser/create/create.html',
        controller:'ManageuserAppCreateController',
    }

    angular.module('components.manageuser')
            .component('manageuserAppCreate',manageuserAppCreate);
})(window.angular);
