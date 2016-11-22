(function() {
   angular
      .module('nodeshop')
      .factory('blogs', function($http) {

         const getBlogs = function() {
            let call = $http({
               method: 'GET',
               url: 'http://localhost:3007/blogs'
            });
            return call;
         }

         const addBlog = function(blogPost) {
            let call = $http({
               method: 'POST',
               data: { blogPost: blogPost },
               url: 'http://localhost:3007/blogs'
            });
            return call;
         }

         const addComment = function(comment) {
            let call = $http({
               method: 'POST',
               data: { comment: comment },
               url: 'http://localhost:3007/comments'
            });
            return call;
         }

         return {
            getBlogs,
            addBlog,
            addComment
         }

      });
})();
