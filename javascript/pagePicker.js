

let request = new XMLHttpRequest();
let url = "https://jsonplaceholder.typicode.com/photos";

request.open('GET', url, true);
request.send();

request.onreadystatechange = function () {
        let data = request.responseText;
        dealWithData(data);
};

function dealWithData(data) {
let counter=0;
    for (let i=0;i<data.length;i++){
      counter++;
      let div= getElementsByClassName('boxes');

        div.innerHTML = "<p>"+data[i].thumbnailUrl+data[i].title+"</p>";
        let button= document.createElement("button");
        button.textContent= "like";
        button.border= "red";
        button.color= "red";
        document.body.appendChild(div);

        button.onclick = function(){
            let button = this;
            let div = button.parentElement;
            let className = div.class;
            likeMe(className);

    }
}
}

function likeMe(){
    button.textContent="dislike";
    button.backgroundColor="red";

    button.onclick = function(){
      let button = this;
      let div= button.parentElement;
      let className= div.class;
      dislikeMe(className);
    }
}

function dislikeMe(){
  button.textContent="like";
  button.backgroundColor="white";

  button.onclick = function(){
    let button = this;
    let div= button.parentElement;
    let className= div.class;
    dislikeMe(className);
  }
}
