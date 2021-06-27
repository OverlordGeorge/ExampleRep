const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/test', (req, res) => {
    res.send('test')
})

app.listen(port, () => {
    console.log("server is listening in port "+port);
})

let data = [
    {
        "id": 0,
        "name": "Pizza Margarita",
        "price": 300,
        "type": "food"
    },
    {
        "id": 1,
        "name": "Bud",
        "price": 65,
        "type": "drink"
    },
    {
        "id": 2,
        "name": "Pepsi",
        "price": 48,
        "type": "drink"
    }
];


app.get("/products/get", (request, response) => {
    response.status(200).send(data);
})

app.post("/products/create", (request, response) => {
    let newProduct = request.body;
    newProduct['id'] = Math.floor(Math.random() * 1000000);
    data.push(newProduct);
    response.status(200).send(newProduct);
})

app.post("/products/delete", (request, response) => {
    let id = request.body.id;
    let num = data.findIndex( (product) => product.id === id);
    data.splice(num, 1);
    response.status(200).send("Ok");
})

app.post("/products/update", (request, response) => {
    let updateProduct = request.body;
    let num = data.findIndex( (product) => product.id === id);
    if (num !== -1) {
        data[num] = updateProduct;
    }
    response.status(200).send("Ok");
})