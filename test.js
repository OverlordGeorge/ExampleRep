let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function makeRequest (url, callback){
    let req= new XMLHttpRequest();
    req.onreadystatechange = function(){
        if (req.status === 200){

            //let data = req.responseText;
           // console.log(data);

           /// dealWithData(req);

            callback(req);
        }
    };
    req.open("GET", url, false);
    req.send(null);
}

function dealWithUsers(req){
    console.log(req.responseText);
}

function dealWithData(req) {
    let data = JSON.parse(req.responseText);
    let id = data[0].id;
   // console.log(id);
    let newUrl = "https://jsonplaceholder.typicode.com/todos?id="+id;
    makeRequest(newUrl, dealWithUsers);
}

let url = "https://jsonplaceholder.typicode.com/todos?userId=1";

makeRequest(url, dealWithData);