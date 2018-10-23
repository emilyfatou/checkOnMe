(function(angular) {
    'use strict';
    function ManageuserAppCreateController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope){
        var ctrl =this;
        
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
            
        };

        ctrl.ok = function () {
        var createadmin = {
                first_name:ctrl.first_name,
                last_name:ctrl.last_name,
                email: ctrl.email,
                password:ctrl.password,
                phone_number:ctrl.phone_number,
                user_type: "admin"
           
        };
        
        $http.post(signupURL,createadmin).then(function(ok){
            console.log("worked");
               },function(err){
                   //say smtg here
                  console.log("error");
             });
             
        };

        ctrl.cancel = function () {
          ctrl.dismiss({$value: 'cancel'});
        };
    }


    angular.module('components.manageuser')
            .controller('ManageuserAppCreateController',ManageuserAppCreateController);
})(window.angular);
