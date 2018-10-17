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

    let db = client.db("shop");
    let coll = db.collection("fruits");

    let lowerP = 13;
    let upperP = 20;

    coll.find({price:{$gt: lowerP, $lt: upperP}}).toArray(function (err,result) {
        console.log(result);
    });

    coll.update({name:"orange1"}, {weight: 10}, {upsert: true});

    let db2 = client.db("carFactory");
    let carsColl = db2.collection("cars");
    let engineColl = db2.collection("engines");

    engineColl.findOne({power: 200},function (err, result) {
       let name = result.name;
       carsColl.find({engine: name}).toArray(function (err,result) {
           console.log(result);
       })
    });

    console.log("ive connected");
});