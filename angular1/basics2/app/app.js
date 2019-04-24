let app = angular.module("AngApp",[]);

app.controller("AngContr", function ($scope) {

    $scope.name="";
    $scope.price="";

    $scope.title = "Our Clothes";

    $scope.addOutfit=function(){
        let obj={
            name: $scope.name,
            price: $scope.price,
            fav: false
        };
        $scope.clothes.push(obj);
        $scope.name = "";
        $scope.price = "";
    };

    $scope.clothes = [
        {
            name: "Black Hat",
            price: 20,
            fav: false
        },
        {
            name: "Jeans",
            price: 28,
            fav: false
        },
        {
            name: "Scarf",
            price: 15,
            fav: true
        }
    ]

});