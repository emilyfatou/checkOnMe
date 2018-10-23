(function(angular) {

'use strict'

angular.module('components',['components.auth',
                               'components.viewroutes',
                               'components.dashboard',
                               'components.manageuser',
                               'components.editprofile',
                               'components.accountlogs',
                               'components.changepassword',
                               'components.profile'
                        
                               

                               
                               ])
           .run([function(){

            console.log('components run');

            }]);

})(window.angular);
