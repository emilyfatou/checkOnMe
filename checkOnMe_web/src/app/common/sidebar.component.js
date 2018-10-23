(function(angular) {

    'use strict'
    var sidebar = {
        templateUrl: "app/common/sidebar.html",
        controller: "SidebarController"
     }

    angular.module('common')
           .component('sidebar', sidebar)
})(window.angular);