

let request = new XMLHttpRequest();
let url = "https://jsonplaceholder.typicode.com/photos?_page=2";

request.open('GET', url, true);
request.send();

request.onreadystatechange = function () {
        if (request.responseText !== ""){
            let data = request.responseText;
            dealWithData(JSON.parse(data));
        }

};

function dealWithData(data) {
let counter=0;
    for (let i=0;i<data.length;i++){
      counter++;
      let div= document.createElement("div");
      let boxes= document.getElementsByClassName("boxes")[0];
        let image= document.createElement("img");
        image.src=data[i].thumbnailUrl;

        let parag= document.createElement("p");
        parag.textContent= data[i].title;
        let button= document.createElement("button");
        button.textContent= "like";
        button.border= "red";
        button.color= "red";
        div.className="box";
        div.appendChild(image);
        div.appendChild(parag);

        button.onclick = function(ev){
            let button = ev.target;
            let div = button.parentElement;
            let className = div.className;
            likeMe(className);

        }

        div.appendChild(button);

        boxes.appendChild(div);


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
