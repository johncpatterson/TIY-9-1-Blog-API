(function() {
   angular
      .module('nodeshop')
      .factory('users', function($http) {

         const getUsers = function() {
            let call = $http({
               method: 'GET',
               url: 'http://localhost:3009/users'
            });
            return call;
         }

         const addUser = function(newUser) {
            let call = $http({
               method: 'POST',
               data: { newUser: newUser },
               url: 'http://localhost:3009/users'
            });
            return call;
         }

         const deleteUser = function(id) {
            let call = $http({
               method: 'POST',
               data: { _id: id },
               url: 'http://localhost:3009/users/delete'
            });
            return call;
         }

         return {
            getUsers,
            addUser,
            deleteUser
         }

      });
})();
