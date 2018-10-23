(function(angular) {
    'use strict'

    function ChangepasswordController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope) {
        var ctrl = this;
        ctrl.userpasswords = [];
        var currentUser = JSON.parse(window.localStorage.getItem('userview'));
        var id = currentUser.user._id; // your token
        console.log(id);
        ctrl.$onInit = function() {
            console.log("Controller is being initialized");
            ctrl.password = ctrl.resolve.oldpassword;
            ctrl.new_password = ctrl.resolve.newpassword;
            console.log(ctrl.password);
        };

        ctrl.ok = function() {
            var userpasswords = {
                password: ctrl.oldpassword,
                new_password: ctrl.newpassword
            }
            $http.post(changePassword + id ,userpasswords).then(function(ok){
                    console.log("worked");
                },function(err){
                    console.log("fialed");
                    ctrl.dismiss({
                            $value: 'cancel'
                        });
            });
        };
        ctrl.cancel = function() {
            ctrl.dismiss({
                $value: 'cancel'
            });
        };
    }


    angular.module('components.changepassword')
        .controller('ChangepasswordController', ChangepasswordController);
})(window.angular)