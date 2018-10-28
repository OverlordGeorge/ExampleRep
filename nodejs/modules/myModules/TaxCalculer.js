
let priceChecker = require("./priceChecker");

module.exports = class Calculer{
    constructor(){
        this.checker = new priceChecker();
    };

    calcTexas(price){
        if (this.checker.check(price) === false) {
            console.log("something wrong with the price");
            return false;
        }
        let tax = 0.2 * price;
        return tax;
    };

    calcCalifornia(price){
        if (this.checker.check(price) === false) {
            console.log("something wrong with the price");
            return false;
        }
        let tax = 0.3 * price;
        return tax;
    }
};