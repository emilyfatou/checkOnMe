(function(angular) {
    'use strict';
    angular.module('common', [
        'datatables',
        'ui.bootstrap'
    ]).run(commonRun);
    commonRun.$inject = ['$rootScope', '$transitions'];

    function commonRun($rootScope, $transitions) {
        console.log($transitions);
        $transitions.onStart({
            to: function(state) {
                //Check if the user is logged in and check if the state we are going to require login or not
                return state.data != null && state.data.requireLogin === true;
            }
        }, function(trans) {
            var $state = trans.router.stateService;
            var AuthService = trans.injector().get('AuthService');
            if (!AuthService.loggedIn()) {
                return $state.target("auth.login");
            }
            console.log("test");
        });
        console.log("on change fired");
        // $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams, options){
        //     console.log("on change fired");
        // })
    }
})(window.angular);