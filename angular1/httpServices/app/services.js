
app.factory('request', function ($http) {
    return {
       commentsRequest: function (id, callback) {
           $http({
               method: "GET",
               url: "https://jsonplaceholder.typicode.com/comments",
               params: {
                   postId: id
               }
           }).then(function(data){
               callback(data.data);
           })
       },
        usersRequest: function (id, callback) {
            $http({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/users",
                params: {
                    userId: id
                }
            }).then(function(data){
                callback(data.data);
            })

        }
    }}
);