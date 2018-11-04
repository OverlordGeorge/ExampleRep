module.exports = class checkBook {
    constructor(collection) {
        this.collection = collection;
    }


    showBook(name, author, callBack) {


        let obj = {};
        if (name !== undefined) {
            obj["name"] = new RegExp(name);
        }
        if (author !== undefined) {
            obj["author"] = author;
        }
        this.collection.find(obj).toArray(function (err, result) {
           callBack(result);
        })

    }

};
