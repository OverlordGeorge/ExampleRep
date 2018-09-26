
let express = require('express');
let app = express();
let port = 3000;

app.listen(port, function () {
    console.log("server is working");
});

app.get("/testGetApi", function (req, res) {
    res.send("hello im the get api");
});

app.get("/testGetApi2", function (req, res) {
    res.send("hello im the get api 2");
});

app.get("/sayHello",function (req,res) {
    let name = req.query.name;
    res.send("Hello "+name);
});