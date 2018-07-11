
class Man{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greetings(){
        console.log("Hello my name is"+this.name);
    }

}

function oldMan(name, age) {
    this.name = name;
    this.age = age;
}

oldMan.prototype.greetings = function () {
    console.log("Hello my name is"+this.name);
};

let ex1 = new Man("Nick", 13);
ex1.greetings();
let ex2 = new oldMan("George", 21);
ex2.greetings();

