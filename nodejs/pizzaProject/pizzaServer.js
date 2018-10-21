let express = require('express');
let app = express();
let port = 3000;
let fs = require('fs');
let mongo = require("mongodb").MongoClient;
let mongodb= require("mongodb");
let cors = require('cors');

app.use(cors());

app.listen(port, function () {
    console.log("server is working");
});


mongo.connect("mongodb://localhost:27017", function (err, client) {
    if (err) {
        console.log("cant connect to server");
        return;
    }
    let db = client.db("pizzaShop");
    let collection = db.collection("pizza");

    app.get('/addItem', function (req, res) {

        let name = req.query.name;
        let price = req.query.price;
        let newObj = {
            name: name,
            price: price
        };

        collection.insertOne(newObj);
        res.send("item added!");
    });

    app.get('/sendName', function (req, res) {
        let name= req.query.name;
        collection.find({name:name}).toArray(function (err,result) {
            res.send(result);
        });
    })

    app.get('/updateItem', function (req, res) {

    let id= req.query.id;
        let mongoId = new mongodb.ObjectID(id);
        let name= req.query.name;
        let price= req.query.price;
    collection.update({_id:mongoId}, {name: name, price: price});
res.send("item updated!");
    });
    console.log("ive connected");
});