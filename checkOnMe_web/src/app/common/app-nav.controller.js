(function(angular) {

    'use strict'

    function NavController($scope, AuthService, $mdDialog, $stateParams, $http, $uibModal, $rootScope) {
        var ctrl = this;
        var originatorEv;
        ctrl.userv = $rootScope.global.user;
        console.log(ctrl.userv);
        var currentUser = JSON.parse(window.localStorage.getItem('userview'));
        var id = currentUser.user._id; 
            this.openMenu = function($mdMenu, ev) {
                originatorEv = ev;
                $mdMenu.open(ev);
            };

            this.notificationsEnabled = true;
            this.toggleNotifications = function() {
                this.notificationsEnabled = !this.notificationsEnabled;
            };

    
        ctrl.edit = function(size, user) {

            var modalInstance = $uibModal.open({
                component: 'editprofile',
                resolve: {
                    user: function() {
                        return user;
                    }
                }
            });
            modalInstance.result.then(function(user) {
            //     $http.put(getProfilesURL+ id,user).then(function(ok){
            //        console.log("passsed");
            //    },function(err){
            //        console.log("failed");
            //  });
               
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }
          ctrl.changepassword = function(size, user) {

            var modalInstance = $uibModal.open({
                component: 'changepassword',
                resolve: {
                    user: function() {
                        return user;
                    }
                }
            });
             modalInstance.result.then(function(user) {
            //      console.log(userdata);
            //     $http.put('http://130.211.250.101:8001/users/login'+ user._id + '/updatePass',userdata).then(function(ok){
            //    },function(err){
            //        //say smtg here
            //        //console.log(user);
            //  });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }

        ctrl.logout = function() {
            AuthService.logout();
        }
    }
    angular.module('common')
        .controller('NavController', NavController)
})(window.angular);