let express = require('express');
let app = express();
let port = 3000;
let fs = require('fs');
let mongo = require("mongodb").MongoClient;
let mongodb= require("mongodb");

let User = require("./myModules/User");

app.listen(port, function () {
    console.log("server is working");
});

mongo.connect("mongodb://localhost:27017", function (err, client) {
    if (err) {
        console.log("cant connect to server");
        return;
    }

    let db = client.db("registration");
    let collection = db.collection("users");

    let userColl = new User(collection);

    userColl.insertUser("nick1","1234");
   // userColl.insertUser("mary","222");


});