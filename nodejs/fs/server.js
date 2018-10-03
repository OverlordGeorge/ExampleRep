let express = require('express');
let app = express();
let port = 3000;
let fs = require('fs');

let cors = require('cors');

app.use(cors());

app.listen(port, function () {
    console.log("server is working about fs");
});

app.get('/showUsers',function (req, res) {
    fs.readFile("data.json",'utf8',function (err, data) {
        let json = JSON.parse(data);
        res.send(json);   //send result to user(show on page)
    })
});



function readFromFile() {
    fs.readFile("data.json",'utf8',function (err, data) {
        console.log(data);
    })
}

