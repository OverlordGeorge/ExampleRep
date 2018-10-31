let express = require('express');
let app = express();
let port = 3000;
let fs = require('fs');
let mongo = require("mongodb").MongoClient;
let mongodb= require("mongodb");

let checkBook = require("./myModules/checkBook");
let mongoInput = require("./myModules/mongoInput");

app.listen(port, function () {
    console.log("server is working")
});

mongo.connect("mongodb://localhost:27017", function (err, client) {
    if (err) {
        console.log("cant connect to server");
        return;
    }
    let db = client.db("bookStore");
    let collection = db.collection("books");

    let check = new checkBook(collection);
let input= new mongoInput(collection);


    app.get('/addBook', function (req, res) {
        let name = req.query.name;
        let author = req.query.author;
        let date = req.query.date;
        let type = req.query.type;

        let checkEmpty = check.ifNoneEmpty(name, author, date, type);
        if (checkEmpty === true) {

            let checkExisting = check.checkExisting(name, author, function (data) {
                if (data === false) {
                     input.addBook(name, author, date, type);
                     res.send("Book added!");
                }
            })
        }
    })

})