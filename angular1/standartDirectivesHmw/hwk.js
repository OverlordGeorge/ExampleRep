let app = angular.module("AngApp",[]);
let url= "http://tactravels.com:3000";

app.controller("AngContr", function ($scope) {


$scope.collectionNames = {"jamaicaBtn", "mexicoBtn", "dominicanRepublicBtn", "cruiseBtn"};

    $scope.data = [
        {
            name: "jamaicaBtn",


            name: "mexicoBtn",

        }];

    $scope.showAlbum= false;
    $scope.showModule= false;

    $scope.albums= "";
    $scope.number;
    $scope.newObj= {name: "", image: ""};





    $scope.goBack= function(){
        if ($scope.showAlbum=== true) {
            $scope.showAlbum = false
        }
    }


    $scope.showAlbums= function(index){
        $scope.showAlbum= true;
        $scope.albums= $scope.data[index].albums;
    }

    $scope.showImageModule= function(index){
        $scope.showModule= true;
        $scope.newObj.image= $scope.albums[index].image;
        $scope.newObj.name= $scope.albums[index].name;
        $scope.number= index;

    }


    $scope.saveName= function(){
    $scope.albums[$scope.number].name= $scope.newObj.name;
    }


    $scope.findImages= function(collection) {

        $.ajax({
            type: "GET",
            url: url + "/findCity",
            data: {
                'collection': collection,



            },
            success: function (data) {//array of items found



            }
        });

    }
})