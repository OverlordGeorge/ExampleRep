let express = require('express');
let app = express();
let port = 3000;
let mongo = require("mongodb").MongoClient;

app.listen(port, function () {
    console.log("server is working about mongo");
});

mongo.connect("mongodb://localhost:27017",function (err, client) {
    if (err)
    {
        console.log("cant connect to server");
        return;
    }

    let db = client.db("shop");  //shop database
    let collection = db.collection("fruits");   //collection fruits
    collection.find({}).toArray(function (err,result) {
        //console.log(result);
    });

    collection.find({name:"apple"}).toArray(function (err,result) {
        console.log(result);
    });

    let newObj={
        name: "Nick",
        age: 17
    };

    collection.insertOne(newObj);
    console.log("ive connected");
});
