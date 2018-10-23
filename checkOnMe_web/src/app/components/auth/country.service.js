(function(angular) {
  'use strict';

  function countryFactory(){
    var countryFac = {
      getCountries : getPays,
    };

    var countries = [
            {id:1,name:"Senegal"},
            {id:2,name:"Ethiopia"},
            {id:3,name:"Kenya"},
            {id:3,name:"Nigeria"},
        ];

    function getPays(){

       return countries;
    }
    function isCountry() {
      //do something
    }

    return countryFac;

  }

  angular.module('components.auth')
          .factory('countryFactory',countryFactory);

    // function countryService() {

        // var countries = [
            // {id:1,name:"Senegal"},
            // {id:2,name:"Ethiopia"},
            // {id:3,name:"Kenya"},
            // {id:3,name:"Nigeria"},
        // ];
        // this.getCountries = function(){
          // return countries;
        // }
    // }

    // angular.module('components.auth')
            // .service('countryService',countryService);
})(window.angular);
