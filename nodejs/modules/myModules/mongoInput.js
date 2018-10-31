module.exports = class mongoInput{
    constructor(collection){
        this.collection= collection

    }
    addBook(name, author, date, type){
        let newBook = {
            name: name,
            author: author,
            date: date,
            type: type
        };
        let self = this;
        self.collection.insertOne(newBook);


        }
}



