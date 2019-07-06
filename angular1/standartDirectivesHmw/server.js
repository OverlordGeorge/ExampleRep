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

//image up there is the name of the field in FormData where i keep file

mongo.connect("mongodb://localhost:27017", function (err, client) {
    if (err) {
        console.log("cant connect to server");
        return;
    }

    let db = client.db("config");

    app.post("/updateAlbum", upload.single("image"), function (req, res) {
        let type = upload;
        let filename = req.file.filename;
        let name = req.body.name;
        let collName = req.body.collection;
        let id = req.body.id;
        let collection = db.collection(collName);

        var myquery = {'_id':ObjectID(id)};
        var newvalues = { $set: {name: name, cityImage: "uploads/"+filename } };
        collection.updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
        });
    });

    app.get("/test", function (req, res) {
        res.send("test");
    });


    app.post("/updateStory", upload.single("image"), function (req, res) {
        let type = upload;
        let filename = req.file.filename;
        let name = req.body.name;
        let collName = req.body.collection;
        let id = req.body.id;
        let collection = db.collection(collName);

        var myquery = {'_id':ObjectID(id)};
        var newvalues = { $set: {name: name, cityImage: "uploads/"+filename } };
        collection.updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
        });
    });



})
