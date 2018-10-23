'use strict'
angular.module('mainApp',['components'])
    .config([function(){
console.log("Configration block");
    }])
    .run([function(){
console.log("run block");
    }]);
'use strict'
angular.module('components')
    .controller('MyController',['$scope',function($scope){
var vm=this;
vm.search=0;

$scope.model={
    title:"this is check on me controller"
            };
$scope.countries=[
    {name:'Ethiopia', population:100},
    {name:'Egypt',population:200},
    {name:'Senegal',population:300},
    {name:'Britain',population:400},
    {name:'US',population:500},
];
$scope.handleClick=function(name){
   console.log(country.name);
}    
}])
    .controller('ChildController',['$scope',function($scope){
    $scope.cmodel={
        title:"child title"
            };
    }])
;
'use strict'
angular.module('components',[])//if we dont use "[]" it means we are calling "components" module
.run([function(){
    console.log('components run');
}])
.filter('searchCity', function() {

 
  return function(countries, search) {

    var filtered = [];
    var num1= 1000000;
    
    angular.forEach(countries, function(country) {

      if (country.population < search) {
        filtered.push(country)
      }
      
    })

    return filtered;
  }

});
