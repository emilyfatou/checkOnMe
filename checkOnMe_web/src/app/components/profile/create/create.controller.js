(function(angular) {
    'use strict';
    function ProfileAppCreateController(){
        var ctrl =this;
        
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
            ctrl.user = ctrl.resolve.user;

            console.log(ctrl.user);
        };

        ctrl.ok = function () {
        var createclub = {
            club_name:ctrl.club_name,
            nick_name:ctrl.nick_name,
            ground: ctrl.ground,
            manager:ctrl.manager,
            year_formed:ctrl.year_formed,
            chairperson:ctrl.chairperson,
            country:ctrl.adress.country,
            city: ctrl.adress.city,
            post_code:ctrl.adress.post_code

        };
        ctrl.createclubdata = createclub;  
        console.log(ctrl.createclubdata);
        $http.post('http://130.211.252.163:8100/clubs',createclubdata).then(function(ok){
               },function(err){
                   //say smtg here
                   //console.log(user);
             });
             
        };

        ctrl.cancel = function () {
          ctrl.dismiss({$value: 'cancel'});
        };
    }


    angular.module('components.profile')
            .controller('ProfileAppCreateController',ProfileAppCreateController);
})(window.angular);
