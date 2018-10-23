(function(angular) {
    'use strict';
    var userLogView={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/accountlogs/view/view.html',
        controller:'UserAppLogController',
    }

    angular.module('components.manageuser')
            .component('userLogView',userLogView);
})(window.angular);
