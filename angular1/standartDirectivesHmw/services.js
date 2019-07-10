app.factory('request', function ($http) {
    return {
        collectionRequest: function (collection, callback) {
            $http({
                method: "GET",
                url: "http://tactravels.com:3000/findCity",
                params: {
                    collection: collection
                }
            }).then(function (data) {
                callback(data.data);
            })
        },
        updateAlbum: function (file, name, id, collection) {
            let fd = new FormData();
            fd.append("name", name);
            fd.append('collection', collection);
            fd.append('id', id);
            fd.append("image", file);  //suppose to be last
            $http.post("http://tactravels.com:3000/updateAlbum", fd, {  //put http://tactravels.com:3000/updateAlbum instead there
                withCredentials: true,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity,
            }).then(function (data) {
                console.log(data);
            })
        },

        updateStory: function (file, id, title, text) {
            let fd = new FormData();
            fd.append("title", title);
            fd.append('text', text);
            fd.append('id', id);
            fd.append("image", file);  //suppose to be last
            $http.post("http://tactravels.com:3000/updateStory", fd, {  //put http://tactravels.com:3000/updateAlbum instead there
                withCredentials: true,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity,
            }).then(function (data) {
                console.log(data);
            })
        },


        storyRequest: function (callback) {
            $http({
                method: "GET",
                url: "http://tactravels.com:3000/findStory",
                params: {}
            }).then(function (data) {
                callback(data.data);

            })

        },
        reviewRequest: function (callback) {
            $http({
                method: "GET",
                url: "http://tactravels.com:3000/findReview",
                params: {}
            }).then(function (data) {
                callback(data.data);

            })

        },

        updateReview: function (id, name, text) {
            let fd = new FormData();
            fd.append("id", id);
            fd.append('name', name);
            fd.append('text', text);

            $http.post("http://tactravels.com:3000/updateReview", fd, {
                withCredentials: true,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity,
            }).then(function (data) {
                console.log(data);
            })
        },

        aboutRequest: function (callback) {
            $http({
                method: "GET",
                url: "http://tactravels.com:3000/findAbout",
                params: {}
            }).then(function (data) {
                callback(data.data);

            })

        },

        updateAbout: function (id, name, file, text, mission) {
            let fd = new FormData();
            fd.append('id', id);
            fd.append("name", name);
            fd.append('text', text);
            fd.append("mission", mission);
            fd.append("image", file);  //suppose to be last
            $http.post("http://tactravels.com:3000/updateAbout", fd, {  //put http://tactravels.com:3000/updateAlbum instead there
                withCredentials: true,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity,
            }).then(function (data) {
                console.log(data);
            })
        },

    }


});





