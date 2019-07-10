let express = require('express');
let app = express();
let cors = require('cors');

let mongo = require("mongodb").MongoClient;
let mongodb = require("mongodb");
let ObjectID = require('mongodb').ObjectID;

app.use(cors());
let port = 3000;

let multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (req.originalUrl == "/updateAlbum"){
            cb(null, __dirname+'/uploads/albums')
        }
        else if (req.originalUrl == "/updateStory"){
            cb(null, __dirname+'/uploads/stories')
        }
        else{                           //You can add any other if else for your different request
            cb(null, __dirname+'/uploads')
        }
    },
    filename: function (req, file, cb) {
        let words = file.mimetype.split("/");
        let type = words[words.length-1];
        cb(null, file.fieldname + '-' + Date.now()+'.'+type);
    }
});

var upload = multer({ storage: storage })

//let upload = multer({dest: __dirname+'/uploads'});


app.listen(port, function () {
    console.log("server is working to upload files");
});





    app.get("/updateReview", function (req, res) {

        let id = req.body.id;
        let name = req.body.name;
        let text= req.body.text;


    });





