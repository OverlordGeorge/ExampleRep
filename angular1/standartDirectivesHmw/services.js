
app.factory('request', function ($http) {
    return {
        collectionRequest: function (collection, callback) {
            $http({
                method: "GET",
                url: "http://tactravels.com:3000/findCity",
                params: {
                    collection: collection
                }
            }).then(function(data){
                callback(data.data);
            })
        },

        storyRequest: function ( callback) {
            $http({
                method: "GET",
                url: "http://tactravels.com:3000/findStory",
                params: {

                }
            }).then(function(data){
                callback(data.data);

            })

        }

    }


});





