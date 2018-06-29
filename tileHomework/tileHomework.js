class TileClass {
  constructor (name, price, height, width){
    this.name= name;
    this.price= price;
    this.height=height;
    this.width= width;
  }
  areaOfTiles(){
  return this.height * this.width;
}
  calcPrice(N){
    return N * this.price;
  }
}

function sortByArea(M,arr){
  let areaArray= [];
  for (let i=0; i<arr.length; i++){
    if (arr[i].areaOfTiles() >M){
      areaArray.push(arr[i]);
    }
  }
  return areaArray;
}


function classArr (arr){
  let classArray=[];
  for (let i=0; i<arr.length; i++){
  let temp= new TileClass(arr[i].name, arr[i].price, arr[i].height, arr[i].width);
  classArray.push(temp);
}
return classArray;
}

function sortArea(arr){
  for (let j=0; j<=arr.length; j++){
    for (let i=0; i<arr.length-1; i++){
      if (arr[i].areaOfTiles() > arr[i+1].areaOfTiles()){
        let temp= arr[i];
        arr[i]= arr[i+1];
        arr[i+1]=temp;
      }
    }
  }

}

function sortLess(arr){
  for (let j=0; j<=arr.length; j++){
    for (let i=0; i<arr.length-1; i++){
      if (arr[i].price>arr[i+1].price){
        let temp=arr[i];
        arr[i]= arr[i+1];
        arr[i+1]=temp;
      }
    }
  }
return arr;
}



let data = [
    {
        name:"tile",
        price: 15,
        height: 5,
        width: 5
    },
    {
        name:"granit",
        price: 25,
        height: 3,
        width: 3
    },
    {
        name: "stone",
        price: 10,
        height: 6,
        width: 4
    },
    {
        name: "concrete",
        price: 12,
        height: 3,
        width: 6
    },
    {
        name: "wood",
        price: 8,
        height: 10,
        width: 10
    }
];

let arrayOfClasses= classArr(data);
console.log(arrayOfClasses);
sortArea(arrayOfClasses);
console.log(arrayOfClasses);
let sortedByArea= sortByArea(20, arrayOfClasses);
//console.log(sortedByArea);
//console.log(arrayOfClasses[2].areaOfTiles());
//console.log(arrayOfClasses[2].calcPrice(3));
//let class1= new TileClass(data);
//console.log(areaOfTiles(class1));
//console.log(sortLess(arrayOfClasses));
