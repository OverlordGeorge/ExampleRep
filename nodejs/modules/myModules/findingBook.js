module.exports = class checkBook {
    constructor(collection) {
        this.collection = collection;
    }


    showBook(name, author, callBack) {

        if (name.length > 1 && author.length > 1) {
            callBack(false, this.collection);
        }
        let obj = {};
        if (name !== undefined) {
            obj["name"] = name;
        }
        if (author !== undefined) {
            obj["author"] = author;
        }
        this.collection.find(obj).toArray(function (err, result) {

            if (result.length >= 1) {

                callBack(true, result);

            }
            else {
                let otherObj = {};
                if (name !== undefined) {
                    obj["name"] = new RegExp(name);
                }
                if (author !== undefined) {
                    obj["author"] = new RegExp(author);
                }
            }
            this.collection.find(otherObj).toArray(function (err, result) {
                if (result.length >= 1) {

                    callBack(true, result);

                }
                else {
                    callBack(false);
                }
            }
        };
    }

)
    ;
}

}


}