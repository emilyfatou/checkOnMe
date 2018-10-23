(function(angular) {
    'use strict';
    var userEd={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/viewroutes/edit/edit.html',
        controller:'UserEdController',
    }

    angular.module('components.viewroutes')
            .component('userEd',userEd);
})(window.angular);
