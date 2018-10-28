
module.exports = class PriceChecker{
    constructor(){

    }

    checkIfEmpty(price){
        if (price == "")
            return true;
        else return false;
    }

    checkIfLower(price){
        if (price<10)
            return false;
        else return true;
    }

    check(price){
        /*if (!this.checkIfEmpty(price)){   // if its false than if will gonna work
            return false;
        }  */

        if (this.checkIfEmpty(price) === false){
            return false;
        }

        if (this.checkIfLower(price) === false){
            return false;
        }

        return true;
    }
};