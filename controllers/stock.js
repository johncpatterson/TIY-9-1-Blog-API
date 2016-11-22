(function() {
   angular
      .module('nodeshop')
      .controller('UserController', function UserController(blogs) {
         let vm = this;

         let promise = users.getUsers();
         promise.then(response => {
            console.log(response.data);
            vm.users = response.data;
         })

         vm.submit = function(user) {
            let newUser = {
               name: user.username,
               age: user.userage,
               likejs: user.likejs,
            };

            let promise = users.addUser(newUser);
            promise.then(response => {
               console.log(response.data);
               vm.users = response.data;
            })
            vm.form = {};
         }

         vm.onClickDelete = function(id) {
            let taco = {
               id: id
            };
            let promise = users.deleteUser(taco);
            promise.then(response => {
               console.log(response.data);
               vm.users = response.data;
            })
         }
      })
})();
