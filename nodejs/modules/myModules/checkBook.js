module.exports = class checkBook {
    constructor(collection) {
this.collection=collection;
    }

    ifNoneEmpty(name,author,date,type){
        if(name !== "" && author !== "" && date !== "" && type !== ""){
            return true;
        }
        else return false;
    }


    checkExisting(name,author,callBack){
        this.collection.find({name: name, author: author}).toArray(function (err, result) {
            if (result !==[]){
                callBack(true);

            }
            else callBack(false);
        });

    }
}