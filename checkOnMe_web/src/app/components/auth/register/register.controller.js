(function(angular) {
  'use strict';

  function RegisterController($scope,$state,$http,countryFactory,AuthService,$rootScope){
    var ctrl = this;
    ctrl. countries = countryFactory.getCountries();
    ctrl.register = function () {
      var user = {
        first_name:ctrl.first_name,
        last_name:ctrl.last_name,
        email: ctrl.email,
        password:ctrl.password,
        phone_number:ctrl.phone_number,
        user_type: "admin"
        
      };
      if(ctrl.password === ctrl.confpassword){
      AuthService.register(user).then(function (response) {
        ctrl.userreg = response.data;
         console.log(ctrl.userreg);
         console.log(response);
         $("#infosuccess").show().delay(2000).fadeOut();
         
      },function (error) {
          console.log(error);
          $("#infofail").show().delay(2000).fadeOut();
          ctrl.email = '';
          ctrl.first_name = '';
          ctrl.last_name = '';
          ctrl.confpassword = '';
          ctrl.password = '';
          ctrl.phone_number = '';
          
        })
      }else{
          console.log("password Mistach");
      }
    }
  }

  angular.module('components.auth')
         .controller('RegisterController',RegisterController);

})(window.angular);
