module.exports = class checkBook {
    constructor(collection) {
        this.collection = collection;
    }

    ifFull(name, author, date, type) {
        if (name !== undefined && author !== undefined && date !== undefined && type !== undefined) {
            return true;
        }
        else return false;
    }


    checkNotExisting(name, author, callBack) {
        this.collection.find({name: name, author: author}).toArray(function (err, result) {

            if (result.length === 0) {

                callBack(true);
            }
            else callBack(false);
        });

    }

    checkNotExistingAntology(name, author, callBack) {
        this.collection.find({name: {'$in': name}, author: author}).toArray(function (err, result) {

            if (result.length === 0) {

                callBack(true);
            }

            else callBack(false);
        });

    }



    checkProperty(name, author, date, type) {
        let obj = {};
        if (name !== undefined) {
            obj.name = name;
        }
        if (author !== undefined) {
            obj.author = author;
        }
        if (date !== undefined) {
            obj.date = date;
        }
        if (type !== undefined) {
            obj.type = type;
        }
        return obj;
    }

}