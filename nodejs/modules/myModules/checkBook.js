module.exports = class checkBook {
    constructor(collection) {
this.collection=collection;
    }

    ifFull(name,author,date,type){
        if(name !== undefined && author !== undefined && date !== undefined && type !== undefined){
            return true;
        }
        else return false;
    }


    checkNotExisting(name,author,callBack){
        this.collection.find({name: name, author: author}).toArray(function (err, result) {

            if (result.length===0){

                callBack(true);

            }
            else if (name.length > result.name){
                let newObj= {};
                for (let i=0; i<=name.length; i++){
                    if (result.name !== name[i] ){
                        newObj.push(result[i]);
                        callBack(true, newObj);
                    }
                }
            }
            else callBack(false);
        });

    }
}