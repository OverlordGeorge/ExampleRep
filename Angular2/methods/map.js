let bankClients = [
    {
        "name": 'smanson jackson',
        "trust": false,
        "balance": 170
    },
    {
        "name": 'Lucy Walter',
        "trust": true,
        "balance": 350
    },
    {
        "name": 'Smity west',
        "trust": true,
        "balance": 320
    }
];

let onlyNames = bankClients.map( client => client.name);
console.log(onlyNames);

let tax = 0.25;
let taxes = bankClients.map( client => client.balance * tax);
console.log(taxes);

let untrustedClients = bankClients.map( (client) => {
    client.balance = 0;
    client.trust = false;
    return client;
});
console.log(untrustedClients);