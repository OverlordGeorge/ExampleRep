let data = [
    {
        name: "TestUniversity",
        year: 1901,
        boss: "Nick Shepard"
    },
    {
        name: "Harvard",
        year: 1636,
        boss: "Lawrence Seldon Bacow"
    },
    {
        name: "SibFU",
        year: 2006,
        boss: "Vladimir Kolmakov"
    },
    {
        name: "Cambridge",
        year: 1209,
        boss: "David John Sainsbury"
    },
    {
        name: "LMSU",
        year: 1755,
        boss: "Victor Sadovnich"
    }
];


class Buildings {
  constructor (name, year, boss){
    this.name= name;
    this.year= year;
    this.boss= boss;
  }

  age(){
    return 2018-this.year;
  }

  old(){
    if (this.age() >200){
      return true;
    }
    else{
      return false;
    }
  }

info(){
console.log("name:"+ this.name);
console.log("headteacher:" +this.boss);
}
}


function arrOfClasses(arr){
  let newArr=[];
  for (let i=0; i<arr.length; i++){
    let temp= new Buildings (arr[i].name, arr[i].year, arr[i].boss);
    newArr.push(temp);
  }
  return newArr;

}



let class1= new Buildings(data[0].name, data[0].year, data[0].boss);
//console.log(class1.old());
class1.info();
//console.log(arrOfClasses(data));
