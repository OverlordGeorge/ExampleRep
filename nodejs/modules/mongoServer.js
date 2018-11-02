let express = require('express');
let app = express();
let port = 3000;
let fs = require('fs');
let mongo = require("mongodb").MongoClient;
let mongodb = require("mongodb");

let checkBook = require("./myModules/checkBook");
let mongoInput = require("./myModules/mongoInput");
let findingBook = require("./myModules/findingBook");

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


    app.get('/addAntology', function (req, res) {
        let author = req.query.author;
        let names= req.query.name;
        let type = req.query.type;
        let dates= req.query.type;


let arr=[];
let obj= {};

        for (let i=0; i<=names.length; i++){
            obj.name= name[i];
            obj.author = author;
            obj.type = type;
            for (let i=0; i<=dates.length; i++){
                obj.date = dates[i];
            }
        }
arr.push(obj);

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
    })


    app.get('/showBook', function (req, res) {
        find.showBook(req.query.name, req.query.author, function (data, result, collection) {
            if (data === true){
                res.send(result);
            }
            else {
                res.send(collection);
            }
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
    })

})