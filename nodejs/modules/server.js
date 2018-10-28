let express = require('express');
let app = express();
let port = 3000;
let fs = require('fs');
let mongo = require("mongodb").MongoClient;
let mongodb= require("mongodb");

let taxCalculer = require("./myModules/TaxCalculer");

app.listen(port, function () {
    console.log("server is working");
});

mongo.connect("mongodb://localhost:27017", function (err, client) {
        if (err) {
            console.log("cant connect to server");
            return;
        }

    let price = "";
    let calc = new taxCalculer();
    let taxTexas = calc.calcTexas(price);
    let taxCalifornia = calc.calcCalifornia(price);

    console.log(taxTexas);
    console.log(taxCalifornia);



});