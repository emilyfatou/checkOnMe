(function(angular) {
    'use strict'

    function ViewroutesController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope) {
        var ctrl = this;
        var zareb = {
  "UserId": "f538d503-2719-4008-9b79-e1452c1f6ed2",
  "UserName": "sample string 2",
  "UserPassword": "sample string 3",
  "UserEmail": "sample string 4",
  "UserFullName": "sample string 5",
  "UserMobile": "sample string 6",
  "IsActive": true,
  "IsOkForThisRequest": {
    "IsFailed": true,
    "Message": "sample string 2",
    "Value": "sample string 3"
  },
  "IsOkForDeleteOperation": {
    "IsFailed": true,
    "Message": "sample string 2",
    "Value": "sample string 3"
  },
  "IsOkForEditOperation": {
    "IsFailed": true,
    "Message": "sample string 2",
    "Value": "sample string 3"
  },
  "Language": {
    "ID": "1",
    "Name": "sample string 2"
  }
}
        
        ctrl.users = [];
        $http.post('http://crmapi.daguspace.com/api/HrmAppraisalLookUp/GetAllAppraisalType',zareb ).then(function(res) {
            ctrl.users = res.data;
            console.log(ctrl.users);
        })
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude, position.coords.longitude);

            ctrl.osloCenter = {
                lat: 9.0133,
                lng: 38.77999,
                zoom: 100
            };
            ctrl.markers = {
                osloMarker: {
                    lat: 9.0133,
                    lng: 38.77999,
                    message: "The Location of Injured Person!!",
                    focus: true,
                    draggable: true
                }
            };
        });
        // ctrl.routes = [];
        // $http.get('/routes').then(function(res) {
        //     ctrl.routes = res.data;
        // })
        ctrl.view = function(size, id) {
            
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/components/viewroutes/viewroutes/modal.html',
                controller: 'RouteModalController',
                controllerAs: '$ctrl',
                size: size,
                resolve: {
                    items: function() {
                        var route = {};
                        angular.forEach(ctrl.routes, function(element) {
                            if (element.id === id) {
                                route = element;
                            }
                        });
                        return route;
                    }
                }
            });

            modalInstance.result.then(function(res) {
                console.log(res);
            })
        }
         ctrl.edit = function(size, user) {
            
            var modalInstance = $uibModal.open({
                component: 'userEd',
                backdrop: 'static',
                resolve: {
                    user: function() {
                        return user;
                    }
                }
            });
            modalInstance.result.then(function(user) {
                $http.post('http://crmapi.daguspace.com/api/HrmAppraisalLookUp/UpdateAppraisalType').then(function(ok){
               },function(err){
                   //say smtg here
                   console.log(user);
             });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }
    }

    angular.module('components.viewroutes')
        .controller('ViewroutesController', ViewroutesController);
})(window.angular)