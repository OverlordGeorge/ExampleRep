

let request = new XMLHttpRequest();
let url = "https://jsonplaceholder.typicode.com/users";

request.open('GET', url, true);
request.send();

request.onreadystatechange = function () {
        let data = request.responseText;
        dealWithData(JSON.parse(data));
};

function dealWithDat(data) {
    for (let i=0;i<data.length;i++){
        let div = document.createElement("div");
        div.innerHTML = "<p>"+data[i].name+"</p>"+"<p>"+data[i].email+"</p>";
        document.body.appendChild(div);
    }
}
