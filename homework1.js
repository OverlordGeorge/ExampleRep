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
    console.log(data);
    //return data;
    //write code here which will be creating class for every element of data via loop
    //you might even no need to pecial functions inside class for sorting, try to make make it outside
    //first of all deal with putting in arr of classes data
    /*
    let arr = [];
    for (let i=0;i<data.length;i++)
    {
        create new elem of the class put info in it and then push new elem into array
    }
    then sort array with outside function
     */
}

class DataClass {
    constructor (userId, id, title, body){
        this.userId= userId;
        this.id= id;
        this.title=title;
        this.body= body;

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
}



let ourUrl = "https://jsonplaceholder.typicode.com/posts";

let dataInfo= makeRequest (ourUrl, dealWithData);

console.log(dataInfo);
let class1= new DataClass (dataInfo);
//console.log(DataClass.biggestBody(class1));  // you should call class1.biggestBody(dataInfo) instead DataClass.biggestBody
// DataClass is a type of variables, like string or integer
