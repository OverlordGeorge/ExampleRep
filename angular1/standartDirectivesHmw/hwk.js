let app = angular.module("AngApp",[]);

app.controller("AngContr", function ($scope) {

    $scope.data = [
        {
            name: "jamaicaBtn",
            albums: [
                {
                    name: "Negril",
                    image: "images/jamaica1.jpg"
                },
                {
                    name: "Ocho rios",
                    image: "images/jamaica2.jpg"
                }
            ]
        },
        {
            name: "mexicoBtn",
            albums: [
                {
                    name: "Reviera",
                    image: "images/mexico1.jpg"
                }, {
                    name: "Cabo San Lucas",
                    image: "images/mexico2.jpg"
                }, {
                    name: "Costa and Playa Mujeres",
                    image: "images/mexico3.jpg"
                }

            ]
        }

    $scope.showAlbums= false;
    $scope.showImageModule= false;
    $scope.name= $scope.data.name;
    $scope.albumName= $scope.data.albums.name;
    $scope.image= $scope.data.albums.image;


    $scope.goBack= function(){
        if (showAlbums=== true) {
            showAlbums === false
        }
    }


    $scope.showAlbums= function(){
        $scope.showAlbums= true;
    }

    $scope.showAlbums= function(){
        $scope.showImageModule= true;
    }

}