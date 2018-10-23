(function(angular) {
    'use strict'

    function EditprofileController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope) {
        var ctrl = this;
        ctrl.users = [];
      
        ctrl.userv = $rootScope.global.user;
        console.log(ctrl.userv);
        var currentUser = JSON.parse(window.localStorage.getItem('userview'));
        var id = currentUser.user.profile._id; // your token
        console.log(id);
    //    var Loggeduser = localStorage.getItem('userview');
    //     console.log(Loggeduser);
        // $http.get('/users').then(function(res) {
        //     ctrl.users = res.data;
        // })
     
        var ctrl = this;
        ctrl.$onInit = function() {
            console.log("Controller is being initialized");
            // ctrl.user = ctrl.resolve.user;

            // console.log(ctrl.user);
        };
       var userbject = ctrl.userv;

        ctrl.ok = function() {
       var userbject = {
            email:ctrl.userv.user.email,
            first_name:ctrl.userv.user.profile.first_name,
            last_name:ctrl.userv.user.profile.last_name,
            
        };
        console.log(userbject);
            $http.put(getProfilesURL+ id,userbject).then(function(ok){
                  $("#infosuccess").show().delay(2000).fadeOut();
               },function(err){
                   //say smtg here
                    $("#infofail").show().delay(2000).fadeOut();
             });
             ctrl.dismiss({
                $value: 'cancel'
            });
         };

        ctrl.cancel = function() {
            ctrl.dismiss({
                $value: 'cancel'
            });
        };
    }


    angular.module('components.editprofile')
        .controller('EditprofileController', EditprofileController);
})(window.angular)