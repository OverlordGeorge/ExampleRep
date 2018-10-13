let express = require('express');
let app = express();
let port = 3000;
let fs = require('fs');

let cors = require('cors');

app.use(cors());

app.listen(port, function () {
    console.log("server is working about fs");
});

app.get('/sendLogin', function (req, res) {
    fs.readFile("data.json", 'utf8', function (err, data) {
        let json = JSON.parse(data);
        let login = req.query.login;
        let password = req.query.password;
        let find = 0;
        for (let i = 0; i < json.length; i++) {
            if (login == json[i].login && password == json[i].password) {
                res.send("Hello" + json[i].name);   //send result to user(show on page)
                find = 1;
            }


        }
        if (find == 0) {
            res.send("False");
        }
    })
});

app.get('/regApi', function (req,res) {
    fs.readFile("data.json", 'utf8', function (err, data) {
        let usersArr = JSON.parse(data);
        let name = req.query.name;
        let login = req.query.login;
        let password = req.query.password
        writeData(usersArr, name, login, password);
    });
    });


    function writeData(arr, name, login, password) {
        fs.writeFile("data.json", arr, function (err, data) {
            let newObj = {
                "name": name,
                "login": login,
                "password": password
            }

            arr.push(newObj);


        });
    };






