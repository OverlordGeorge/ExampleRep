let app = angular.module("AngApp",[]);

app.controller("AngContr", function ($scope) {

    $scope.dataArr= [{name: "California", price: 12, recipe: "Chicken, cheese", chosen: false},
        {name: "Barbeque", price: 25, recipe: "Beef, sauce", chosen: false},
        {name: "Special", price: 20, recipe: "mushrooms, olives", chosen: false}];

$scope.name= "";
$scope.price= "";
$scope.recipe= "";
$scope.chosen= false;
//responsible to showing and hiding module
$scope.showModule= false;
$scope.newObj= {name: "", price: ""};
let savedIndex= "";

    $scope.addPizza=function(){
        $scope.obj={name: $scope.name, price: $scope.price, recipe: $scope.recipe, chosen:$scope.chosen};

        $scope.dataArr.push($scope.obj);
        $scope.name= "";
        $scope.price= "";
        $scope.recipe= "";
        $scope.chosen= false;


    }
    
    $scope.deletePizza= function (index) {  // position on the page from ng-repeat
        $scope.dataArr.splice(index,1);
    }

    $scope.chosen;
    $scope.chosenPizza= function (index, boolean) {
        $scope.dataArr[index].chosen= boolean;

    }


    $scope.changePizza= function(name, price, recipe, index){
        $scope.showModule= true;
        $scope.newObj.name= name;
        $scope.newObj.price= price;
        $scope.newObj.recipe= recipe;
        savedIndex= index;
    }



    $scope.cancel= function(){
        $scope.showModule= false;
    }
    
    $scope.saveChanges= function () {
        $scope.dataArr[savedIndex].name= $scope.newObj.name;
        $scope.dataArr[savedIndex].price= $scope.newObj.price;
        $scope.dataArr[savedIndex].recipe= $scope.newObj.recipe;
        $scope.showModule= false;
    }
    
    $scope.deleteAll= function(){
       $scope.dataArr.splice(0,$scope.dataArr.length);
    }

    $scope.deleteAllChosen= function(){
        for (let i=0; i<$scope.dataArr.length; i++){
            if ($scope.dataArr[i].chosen===true){
                $scope.dataArr.splice(i,1);
                i--;
            }
        }
    }
})