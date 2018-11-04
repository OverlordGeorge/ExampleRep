module.exports = class addAntology{
    constructor(collection){
        this.collection= collection

    }
    addBook(obj){

        let self = this;
        self.collection.insert(obj);


    }
}



