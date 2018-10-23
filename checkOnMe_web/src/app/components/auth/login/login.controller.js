(function(angular,localStorage){

    function LoginController($scope,$state,$http,countryFactory,AuthService,$rootScope) {
        var ctrl = this;
        ctrl.error = null;
        ctrl.userview = [];
        ctrl.login = function(){
            var userinfos = {
                email: ctrl.email,
                password: ctrl.password
            }
            AuthService.login(userinfos).then(function (res) {
                ctrl.userview = res.data;
                $rootScope.global = {
                        user: res.data,
                    };
                   localStorage.setItem('user',JSON.stringify(res.data));
                    console.log("ctrl.userview");
                    console.log(ctrl.userview);
                    ctrl.userv = $rootScope.global.user;
                    console.log("ctrl.userv");
                    console.log(ctrl.userv);
                    $state.go('dashboard');
              },function (error) {
                    console.log(error);
                    $("#infofail").show().delay(2000).fadeOut();
                })
         }
     } 
    angular.module('components.auth')
           .controller('LoginController', LoginController);

})(window.angular,window.localStorage)

