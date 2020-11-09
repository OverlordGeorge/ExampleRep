

class Student{

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    imFired(){
        console.log("Im out - "+this.name);
    }

    showInfo(){
        console.log("my name is "+this.name + ", im "+this.age);
    }

    imWorking(){
        console.log("im studying");
    }

}

class Teacher extends Student {

    constructor(name, age, subject) {
        super(name, age); //call constructor of student
        this.subject = subject;
    }

    showInfo() {   //overload method of Student 'showInfo'
        super.showInfo();  // call method 'showInfo' in student
        console.log("i lead "+this.subject);
    }

    imWorking(){
        console.log("im teaching");
    }

}

let st1 = new Student("Sam", 18);
st1.showInfo();
st1.imFired();

let teac1 = new Teacher("Mick", 30, "Math");
teac1.showInfo();
teac1.imFired();