module.exports = class checkBook {
    constructor(collection) {
this.collection=collection;
    }

    ifFull(name,author,date,type){
        if(name !== "" && author !== "" && date !== "" && type !== ""){
            return true;
        }
        else return false;
    }


    checkNotExisting(name,author,callBack){
        this.collection.find({name: name, author: author}).toArray(function (err, result) {

            if (result.length===0){

                callBack(true);

            }
            else callBack(false);
        });

    }
}