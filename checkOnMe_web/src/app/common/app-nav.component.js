(function(angular){

    'use strict'
    var appNav = {
        templateUrl: "app/common/app-nav.html",
        controller:"NavController"
    }
     var editprofile = {
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/editprofile/editprofile/editprofilemodal.html',
        controller:'EditprofileController'
    }

    angular.module('common')
           .component('appNav',appNav)
          

})(window.angular);