let app = angular.module("AngApp",[]);
let url= "http://tactravels.com:3000";

app.controller("AngContr", function ($scope, request) {


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
    $scope.story={};
    $scope.reviews=[];
    $scope.review={};


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

    function urltoFile(url, filename, mimeType) {
        mimeType = mimeType || (url.match(/^data:([^;]+);/) || '')[1];
        return (fetch(url)
                .then(function (res) {
                    return res.arrayBuffer();
                })
                .then(function (buf) {
                    return new File([buf], filename, {type: mimeType});
                })
        );
    }

    $scope.saveCityData= function(name, image, id){  //function that called by click "save"
        let strImage = image;
        let filename = "image";
        let collection = $scope.collection;
        urltoFile(strImage, filename).then(function (imageFile) {
            request.updateAlbum(imageFile, name, id, collection);
        });
    }

    $scope.storeImage= "";


    $scope.showAlbumsTab= function(){
        $scope.storyTab= false;
        $scope.albumTab= true;
    }

    $scope.showStoriesTab=function(){
        $scope.findStory();
        $scope.albumTab= false;
        $scope.storyTab= true;
    }

    $scope.findStory= function() {

        request.storyRequest(function (data) {
            $scope.stories = data;
            $scope.rightBar = true;

        })
    }

    $scope.showStory=function(story){
        $scope.story=story;

    }
    
    $scope.saveStoryData= function (name) {

    }

$scope.findReview= function(){
    request.reviewRequest(function (data){
        $scope.rightBar = true;

    })
}


    $scope.showReviewsTab= function(){
        $scope.findReview();
        $scope.albumTab= false;
        $scope.storyTab= false;
        $scope.reviewTab= true;
    }
})