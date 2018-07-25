class Man{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    get age(){
        return this._age+" years old";
    }

    set name(newName){
        this._name =this._name+" "+newName;
    }
}

let class1 = new Man("Nick", 17);
let age = class1.age;
class1.name = "George";
console.log(class1._name);