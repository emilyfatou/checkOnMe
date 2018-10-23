(function(angular) {
  'use strict'

  angular.module('components')
         .controller('MyController', ['$scope',function($scope){
          var vm = this;
          vm.search = "";
            vm.model = {
              title : "this is an awsome controller",
            };
            vm.countries = [
              {name:'hiopia'},
              {name:'Kenya'},
              {name:'South Sudan'},
              {name:'somalia'},
              {name:'tanzania'},
            ];
            vm.handleClick = function (country) {
                console.log(country.name);
            }
          
          }])
          .controller('ChildController',['$scope',function ($scope) { 
            var cd = this;
              cd.cmodel = {
                title : "Child ttle",
              };
          }]);

})(window.angular);
