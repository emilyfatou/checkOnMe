(function(angular, localStorage) {

    'use strict';

    function AuthService($http, $rootScope, $state) {
        var authservice = {
            login: login,
            register: register,
            getUserInfos: getUserInfos,
            loggedIn: loggedIn,
            logout: logout,
        }

        function login(userinfos) {
            delete $http.defaults.headers.common.Authorization;
            console.log(userinfos);
            return $http.post(loginURL,userinfos);
        }

        function logout() {
            $rootScope.global = {};
            localStorage.removeItem('user');
            $state.go('auth.login')
        }

        function loggedIn() {
            return !!localStorage.getItem('user');
        }
        
        function register(user) {
            console.log(user);
            return $http.post(signupURL,user);
        }

        function getUserInfos(id) {
            // return $http.get('http://localhost:3000/api/user/' + id)
        }

        return authservice;
    }


    angular.module('components.auth')
        .factory('AuthService', AuthService);

})(window.angular, window.localStorage);