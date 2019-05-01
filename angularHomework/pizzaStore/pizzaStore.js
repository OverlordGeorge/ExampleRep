let app = angular.module("AngApp",[]);

app.controller("AngContr", function ($scope) {

    $scope.dataArr= [{name: "California", price: 12},
        {name: "Barbeque", price: 25},
        {name: "Special", price: 20}];

$scope.name= "";
$scope.price= "";


    $scope.addPizza=function(){
        $scope.obj={name: $scope.name, price: $scope.price};

        $scope.dataArr.push($scope.obj);
        $scope.name= "";
        $scope.price= "";


    }
})