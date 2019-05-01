let express = require('express');
let app = express();
let port = 3000;
let fs = require('fs');
let mongo = require("mongodb").MongoClient;
let mongodb = require("mongodb");

let checkBook = require("./myModules/checkBook");
let mongoInput = require("./myModules/mongoInput");
let findingBook = require("./myModules/findingBook");
let addAntology= require("./myModules/addAntology");


app.listen(port, function () {
    console.log("server is working")
});

mongo.connect("mongodb://localhost:27017", function (err, client) {
    if (err) {
        console.log("cant connect to server");
        return;
    }
    let db = client.db("bookStore");
    let collection = db.collection("Books");

    let check = new checkBook(collection);
    let input = new mongoInput(collection);
    let find = new findingBook(collection);
    let antology= new addAntology(collection);



    app.get('/updateBook', function(req,res){
        let id = req.query.id;
        let mongoId = new mongodb.ObjectID(id);
        let author = req.query.author;
        let name= req.query.name;
        let type = req.query.type;
        let date= req.query.date;

        let obj= check.checkProperty(name, author, date, type);

        collection.update({_id: mongoId}, {"$set": obj});
        res.send("item updated!");
    })

    app.get('/addAntology', function (req, res) {
        let author = req.query.author;
        let name= req.query.name;
        let type = req.query.type;
        let date= req.query.date;



let obj= {};


            obj.name= name.split(",");
            obj.author = author;
            obj.type = type;
            obj.date = date.split(",");



        let checkFull = check.ifFull(name, author, date, type);
        if (checkFull === true) {

            check.checkNotExistingAntology(obj.name, obj.author, function (data) {
                if (data === true) {

                    antology.addBook(obj);
                    res.send("Books added!");
                }
                else {
                    res.send("Books already exists");
                }
            })
        }
    })


    app.get('/showBook', function (req, res) {
        find.showBook(req.query.name, req.query.author, function (result) {

                res.send(result);


        });
    })


    app.get('/addBook', function (req, res) {
        let name = req.query.name;
        let author = req.query.author;
        let date = req.query.date;
        let type = req.query.type;

        let checkFull = check.ifFull(name, author, date, type);
        if (checkFull === true) {

            check.checkNotExisting(name, author, function (data) {
                if (data === true) {
                    input.addBook(name, author, date, type);
                    res.send("Book added!");
                }
                else {
                    res.send("Book already exists")
                }
            })
        }
        else{
            res.send("some of the fields are empty")
        }
    })

})