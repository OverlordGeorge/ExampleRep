let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function makeRequest (url, callback){
    let req= new XMLHttpRequest();
    req.onreadystatechange = function(){
        if (req.status == 200){
            callback (req.responseText);

        }
    };
    req.open("GET", url, false);
    req.send(null);
}

// you need to write code here, because only in callback you will receive data not earlier
function dealWithData(data) {
  let obj= JSON.parse(data);

    
let arr=[];
for (let i=0; i<obj.length; i++){
  let temp= new DataClass(obj[i].userId, obj[i].id, obj[i].title, obj[i].body);

  arr.push(temp);
}
sortByBiggestBody(arr);
console.log(arr);
}

function sortByBiggestBody(data){
    for (var i=0; i<=data.length; i++){
        for (var j=0; j<data.length-1; j++){
          if (data[j].body&&data[j+1].body){
            if (data[j].body.length< data[j+1].body.length){
                let temp= data[j];
                data[j]= data[j+1];
                data[j+1]= temp;
            }
          }
        }
    }

}



class DataClass {
    constructor (userId, id, title, body){
        this.userId= userId;
        this.id= id;
        this.title=title;
        this.body= body;
      }

        /*function biggestBody(data){
            let largestBodyLength=0;
            let largestBody;
            for (var i=0; i<=data.length; i++){
                if (this.body.length> largestBodyLength){
                    largestBodyLength= this.body[i].length;
                    largestBody= this.body[i];
                }
            }
            return largestBody;
        }

        function sortByBiggestBody(data){
            for (var i=0; i<=data.length; i++){
                for (var j=0; j<=data.length-1; j++){
                    if (this.body[i+1]> this.body[i]){
                        let temp= this.body[i];
                        this.body[i]= this.body[i+1];
                        this.body[i+1]= temp;
                    }
                }
            }
            return data;
        }*/


    }



let ourUrl = "https://jsonplaceholder.typicode.com/posts";

let dataInfo= makeRequest (ourUrl, dealWithData);

//console.log(dataInfo);
let class1= new DataClass (dataInfo);
//console.log(DataClass.biggestBody(class1));  // you should call class1.biggestBody(dataInfo) instead DataClass.biggestBody
// DataClass is a type of variables, like string or integer
