


let express = require('express');
let app = express();
let port = 3000;

let cors = require('cors');

app.use(cors());

app.listen(port, function () {
    console.log("server is working");
});

let names=["James", "Bob", "Carly"];

app.get("/getNames",function(req,res){
    res.send(names);
})

app.get("/sendName",function(req,res){
    let nameData= req.query.name;
    names.push(nameData);
    res.send();
    console.log(names);
})