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

})