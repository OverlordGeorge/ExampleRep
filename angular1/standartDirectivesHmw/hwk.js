let app = angular.module("AngApp",[]);
let url= "http://tactravels.com:3000";

app.controller("AngContr", function ($scope, request, fileReader, $rootScope) {


$scope.collectionNames = ["jamaicaBtn", "mexicoBtn", "dominicanRepublicBtn", "cruiseBtn"];

$scope.albumTab= false;
$scope.storyTab= false;
$scope.rightBar= false;


    $scope.showAlbum= false;
    $scope.showModule= false;

    $scope.albums= "";
    $scope.number;
    $scope.newObj= {name: "", image: ""};


    $scope.cities= [];
    $scope.collection="";
    $scope.stories=[];
    $scope.title="";


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
        $scope.collection= collection;
        request.collectionRequest(collection, function (data) {
            $scope.cities = data;
            $scope.rightBar= true;
        })


    }

    $scope.saveCityData= function(name){
    console.log($rootScope.storeImage);


    }

    $scope.storeImage= "";


    $scope.showAlbumTab= function(){
        $scope.albumTab= true;
    }

    $scope.showStoryTab=function(){
        $scope.storyTab= true;
    }

    $scope.findStory= function(title) {
        $scope.title = title;
        request.storyRequest(title, function (data) {
            $scope.stories = data;
            $scope.rightBar = true;

        })
    }
})