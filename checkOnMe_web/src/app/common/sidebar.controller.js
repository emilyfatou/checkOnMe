(function(angular,localStorage){

    function SidebarController($scope,$state,$http,countryFactory,AuthService,$rootScope) {
        var ctrl = this;
        ctrl.userv = $rootScope.global.user;
        console.log(ctrl.userv.user.email);
    }
    angular.module('common')
           .controller('SidebarController', SidebarController);

})(window.angular,window.localStorage)

