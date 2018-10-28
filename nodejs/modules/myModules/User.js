
module.exports = class User{
    constructor(collection){
        this.collection = collection;
    }

    insertUser(name, pass){
        let newUser = {
            name: name,
            password: pass
        };
        let self = this;
        self.collection.findOne({name: name}, function (err, result) {
            if (result === null){
                self.collection.insertOne(newUser);
            }
            else console.log("user hasn't been created");
        })
        //this.collection.insertOne(newUser);
    }



};