let names = ["sam jackson", "samuel jackson", "alex smith", "123"];

let searchName = "sa";

let filteredNames1 = names.filter(function (name) {
    if (name.includes(searchName)){   //if 'sa' is inside any of name from names array. name.includes rerturn true/false
        return true;
    }
});

let filteredNames2 = names.filter( (name) => {return name.includes(searchName)} );
let filteredNames3 = names.filter( name => name.includes(searchName));

console.log(filteredNames1);
console.log(filteredNames2);
console.log(filteredNames3);

let users = [
    {
        "name": 'sam jackson',
        "age": 17
    },
    {
        "name": 'Lucy Walter',
        "age": 35
    },
    {
        "name": 'Samuel jackson',
        "age": 32
    }
];

let filteredUsersByName = users.filter( user => user.name.includes(searchName));
console.log(filteredUsersByName);

let searchAge = 30;
let filterUsersByNameAndByAge = users.filter( user => user.name.includes(searchName) && user.age > searchAge );
console.log(filterUsersByNameAndByAge);

// toLowerCase() makes string to be all small letters
let filterUsersByNameCaseNotSensitive = users.filter( user => user.name.toLowerCase().includes(searchName.toLowerCase()));
console.log(filterUsersByNameCaseNotSensitive);