let app = angular.module("AngApp",[]);
let url= "http://tactravels.com:3000";

app.controller("AngContr", function ($scope, request) {


$scope.collectionNames = ["jamaicaBtn", "mexicoBtn", "dominicanRepublicBtn", "cruiseBtn"];

$scope.albumTab= false;
$scope.storyTab= false;
$scope.reviewTab= false;
$scope.aboutTab= false;
$scope.rightBar= false;


    $scope.showAlbum= false;
    $scope.showModule= false;
    $scope.contactTab = false;

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
    $scope.about={};


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
        $scope.reviewTab= false;
        $scope.contactTab = false;
        $scope.aboutTab= false;
    }

    $scope.showStoriesTab=function(){
        $scope.findStory();
        $scope.albumTab= false;
        $scope.storyTab= true;
        $scope.reviewTab= false;
        $scope.contactTab = false;
        $scope.aboutTab= false;
    }

    $scope.findStory= function() {

        request.storyRequest(function (data) {
            $scope.stories = data;


        })
    }

    $scope.showStory=function(story){
        $scope.story=story;
        $scope.rightBar= true;

    }
    
    $scope.saveStoryData= function (id, title, text, image) {
        let strImage = image;
        let filename = "image";

        urltoFile(strImage, filename).then(function (imageFile) {
            request.updateStory(imageFile, id, title, text);
        });
    }



    $scope.showReviewsTab= function(){
        $scope.findReview();
        $scope.albumTab= false;
        $scope.storyTab= false;
        $scope.reviewTab= true;
        $scope.contactTab = false;
        $scope.aboutTab= false;
    }


$scope.findReview= function(){
    request.reviewRequest(function (data){
        $scope.reviews= data;


    })
}

$scope.showReview= function(review){
        $scope.review= review;
        $scope.rightBar= true;
}


    $scope.saveReviewData= function (id, name, text) {
    request.updateReview(id, name, text);

    }

    $scope.showContactTab=function(){
        $scope.albumTab= false;
        $scope.storyTab= false;
        $scope.reviewTab= false;
        $scope.aboutTab= false;
        $scope.contactTab = true;
    }

    $scope.showAboutTab= function(){
        $scope.findAbout();
        $scope.albumTab= false;
        $scope.storyTab= false;
        $scope.reviewTab= false;
        $scope.contactTab = false;
        $scope.aboutTab= true;
    }

    $scope.findAbout= function(){
        request.aboutRequest(function(data){
            $scope.about= data[0];
        })
    }



    $scope.saveAboutData= function (id, name, image, text, mission) {
        let strImage = image;
        let filename = "image";

        urltoFile(strImage, filename).then(function (imageFile) {
            request.updateAbout(id, name, imageFile, text, mission);
        });
    }

    $scope.authorName = "Christy";

});

app.directive('contactInfo', function () {
   return {
       template: function () {
           return '<div>Hi {{authorName}}</div>'
       }
   }
});