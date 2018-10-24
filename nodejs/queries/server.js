let express = require('express');
let app = express();
let port = 3000;
let fs = require('fs');
let mongo = require("mongodb").MongoClient;
let mongodb= require("mongodb");

app.listen(port, function () {
    console.log("server is working");
});

mongo.connect("mongodb://localhost:27017", function (err, client) {
    if (err) {
        console.log("cant connect to server");
        return;
    }

    let db = client.db("people");
    let collection = db.collection("men");

    let objByFullNum = {
        "passport.number":"124E0A"
    };

    collection.find(objByFullNum).toArray(function (err,result) {
        console.log(result);        //result of Nested object search
    });

    let objByArrOfChild = {
       child:{
           $in:["Maria"]
       }
    };

    collection.find(objByArrOfChild).toArray(function (err,result) {
        console.log(result);        //result of Crossing from searching childs array and db childs array
    });

    let objByRegExp ={
        "name": new RegExp("ke")
    };


    collection.find(objByRegExp).toArray(function (err,result) {
        console.log(result);        //result of simple RegExp
    });

    let objByRegExpCompl ={
        "name": new RegExp('^'+"ke")
    };

    collection.find(objByRegExpCompl).toArray(function (err,result) {
        console.log(result);        //result of regexp type of 'starts with'
    });
});