
let data = [
    {
        number: 33,  //number on the street
        flats: 5,   //amount of flats on every floor
        levels: 3 //amount of floors
    },
    {
        number: 27,
        flats: 6,
        levels: 5
    },
    {
        number: 54,
        flats: 8,
        levels: 9
    },
    {
        number: 9,
        flats: 4,
        levels: 2
    },
    {
        number: 18,
        flats: 4,
        levels: 5
    }
];

class HouseClass {
  constructor(number, flats, levels){
    this.number= number;
    this.flats= flats;
    this.levels=levels;
  }

  numberFlats(){
    return this.flats * this.levels;
  }
  }

  function arrClasses(arr){
    let newArr=[];
    for (let i=0; i<arr.length; i++){
      let temp= new HouseClass(arr[i].number,arr[i].flats, arr[i].levels);
      newArr.push(temp);
    }
    return newArr;
  }

  function sortBigToLess(arr){
    for (let a=0; a<arr.length; a++){
      for (let i=0; i<arr.length-1; i++){
      if (arr[i].number < arr[i+1].number){
        let temp= arr[i];
        arr[i]= arr[i+1];
        arr[i+1]= temp;
      }
    }
  }
    return arr;
  }

  function sortNumberFlats(arr){
    for (let a=0; a<arr.length; a++){
      for (let i=0; i<arr.length-1; i++){
        if (arr[i].numberFlats() > arr[i+1].numberFlats()){
          let temp= arr[i];
          arr[i]= arr[i+1];
          arr[i+1]= temp;
        }
      }
    }

  }


let arrayClasses= arrClasses(data);
//let classA= new HouseClass (data[0].number,data[0].flats,data[0].levels);
//let flatsTotal= arrayClasses[1].numberFlats();
//console.log(flatsTotal);
console.log(arrayClasses);
sortNumberFlats(arrayClasses);
//console.log(classA); // success!
console.log(arrayClasses); // success!
//console.log(sortBigToLess(arrayClasses)); // success!
//console.log(arrayClasses[1].numberFlats());
//console.log(classA.numberFlats()); //
