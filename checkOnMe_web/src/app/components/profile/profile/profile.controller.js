(function(angular) {
    'use strict'

    function ProfileController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope) {
        var ctrl = this;
        
        ctrl.profiles = [];
        $http.get('http://130.211.252.163:8100/profiles').then(function(res) {
            ctrl.profiles = res.data;
            console.log(ctrl.profiles);
        })
        
        ctrl.createprofile = function(size) {
            var modalInstance = $uibModal.open({
                component: 'profileAppCreate',
            });
            modalInstance.result.then(function(user) {
                console.log(user);
                ctrl.users.push(user)
                // $http.post('/user',user).then(function(ok){
                //     ctrl.users.push(user)
                // },function(err){

                // });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }
        ctrl.delete = function(size, user) {

            var modalInstance = $uibModal.open({
                component: 'profileAppDelete',
                resolve: {
                    user: function() {
                        return user;
                    }
                }
            });
            modalInstance.result.then(function(user) {
                console.log(user);
                ctrl.users.push(user)

                $http.delete('/user', user).then(function(ok) {
                    ctrl.users.push(user)
                }, function(err) {

                });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }
        ctrl.edit = function(size, profile) {
            
            var modalInstance = $uibModal.open({
                component: 'profileAppEdit',
                
                resolve: {
                    profile: function() {
                        return profile;
                    }
                }
            });
            modalInstance.result.then(function(club) {
                $http.put('http://130.211.252.163:8100/profiles/'+ profile._id,profile).then(function(ok){
                     $("#infoeditsuccess").show().delay(3000).fadeOut();
               },function(err){
                     $("#infoeditfail").show().delay(3000).fadeOut();
                   console.log(club);
             });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }

        ctrl.view = function(size, profile) {
          var modalInstance = $uibModal.open({
                component: 'profileAppView',
               
                resolve: {
                    profile: function() {
                        return profile;
                    }
                }
            });
           
        }
    }

    angular.module('components.profile')
        .controller('ProfileController', ProfileController);
})(window.angular)