function compare(a, b){
    if (a > b){
        console.log(a);
    } else{
        console.log(b);
    }
}

/*
let arr = [1,2,3];

arr.length --- propertie

arr.push(10) --- method
*/

class Product {

    //methods  --- functions
    //properties --- list of data fields
    constructor(name = "product", price = 0) {
        this.name = name;  //property
        this.price = price; //property
    }

    showInfo(){  //method 'showInfo'
        console.log(this.name+" "+this.price+"$");
    }

    changePrice(price = 0){
        this.price = price;
    }

    changeName(name = "") {
        this.name = name;
    }

    setSale(){
        this.price = this.price * 0.9;
    }

}

let apple = new Product("apple", 30);  //created instance of class Product
console.log(apple.price); //access to prop
apple.showInfo();  //call method (function) of class
apple.changeName("App");

let orange = new Product("orange", 55);
orange.showInfo();  //call method (function) of class
orange.name = "Oran";

let prod = new Product();
prod.showInfo();





