let app = angular.module("AngApp",[]);

app.controller("AngContr", function ($scope, $http, request) {
    $scope.name = "";

    $scope.comments = [];
    $scope.postId = "";

    let url = 'https://jsonplaceholder.typicode.com/users';
    let url1 = "../data.json";

    /*$http.get(url).then(function (data) {
        console.log(data);
    })*/

    $scope.makeRequest = function () {
        let id = $scope.postId;
        request.usersRequest(id, function (data) {
            $scope.comments = data;
        })
        /*$http({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/comments",
            params: {
                postId: id
            }
        }).then(function(data){
            $scope.comments = data.data;
        })*/
    }

    /*$http({
     method: "GET",
     url: "https://jsonplaceholder.typicode.com/comments",
     params: {
         postId: 1
     }
    }).then(function(data){
        console.log(data.data);
        $scope.comments = data.data;
    })*/
});