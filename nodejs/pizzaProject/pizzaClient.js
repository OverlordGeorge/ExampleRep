function filterName(){
    let name = $("#input").val();

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/sendName",
        data: {
            'name': name


        },
        success: function (data){
            showPizza(data);
        }
    });
}

function addPizza(){
    let name = prompt("name", "");
    let price = prompt("price", "");
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/addItem",
        data: {
            'name': name,
            'price': price,


        },
        success: function (){
            showAll();

        }
    });
}

function showPizza(data){
    let listDiv= $("#list");
    listDiv.empty();
    console.log(data);
    for (let i=0; i<data.length; i++){
        let rowDiv= document.createElement("div");
        rowDiv.style.border="1px solid";
        rowDiv.style.padding="1%";
        rowDiv.style.width="30%";


        let nameDiv= document.createElement("div");
        let name= data[i].name;
        nameDiv.append(name);
        nameDiv.style.width="100px";
        nameDiv.style.display="inline-block";
        let priceDiv= document.createElement("div");
        let price= data[i].price;
        priceDiv.append(price);
        priceDiv.style.width="100px";
        priceDiv.style.display="inline-block";
        let descDiv= document.createElement("div");
        let desc= data[i].description;
        descDiv.append(desc);
        descDiv.style.width="100px";
        descDiv.style.display="inline-block";
        let moreBtn= document.createElement("button");
        moreBtn.id=data[i]._id;
        moreBtn.style.margin="1%";
        moreBtn.append("more");
        moreBtn.onclick= function() { };
        more.style.backgroundColor="purple";
        let addBtn= document.createElement("button");
        addBtn.id= data[i]._id;
        addBtn.style.margin="1%";
        addBtn.append("add");
        addBtn.onclick= function() { deletePizza(data[i]._id); };
        addBtn.style.backgroundColor="red";
        rowDiv.append(nameDiv);
        rowDiv.append(priceDiv);
        rowDiv.append(moreBtn);
        rowDiv.append(addBtn);
listDiv.append(rowDiv);
    }

}

function showAll() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/showAll",

        success: function (data) {
            showPizza(data);

        }
    });
}

function deletePizza(id){

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/deleteItem",
        data: {
            'id': id,
        },
        success: function (){
            showAll();

        }
    });
}

function update(id){

    let name = prompt("name", "");
    let price = prompt("price", "");
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/updateItem",
        data: {
            'id': id,
            'name': name,
            'price': price,



        },
        success: function (){
            showAll();

        }
    });
}

showAll();