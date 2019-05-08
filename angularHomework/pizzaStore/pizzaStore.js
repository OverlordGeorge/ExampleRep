let app = angular.module("AngApp",[]);

app.controller("AngContr", function ($scope) {

    $scope.dataArr= [{name: "California", price: 12},
        {name: "Barbeque", price: 25},
        {name: "Special", price: 20}];

$scope.name= "";
$scope.price= "";
//responsible to showing and hiding module
$scope.showModule= false;
$scope.newObj= {name: "", price: ""};
let savedIndex= "";

    $scope.addPizza=function(){
        $scope.obj={name: $scope.name, price: $scope.price};

        $scope.dataArr.push($scope.obj);
        $scope.name= "";
        $scope.price= "";


    }
    
    $scope.deletePizza= function (index) {  // position on the page from ng-repeat
        $scope.dataArr.splice(index,1);
    }

    $scope.chosen;
    $scope.chosenPizza= function (index) {
        $scope.chosen= index;
    }


    $scope.changePizza= function(name, price, index){
        $scope.showModule= true;
        $scope.newObj.name= name;
        $scope.newObj.price= price;
        savedIndex= index;
    }



    $scope.cancel= function(){
        $scope.showModule= false;
    }
    
    $scope.saveChanges= function () {
        $scope.dataArr[savedIndex].name= $scope.newObj.name;
    }
    
    
})