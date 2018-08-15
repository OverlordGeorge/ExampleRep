
let pageNumber= 1;


let request = new XMLHttpRequest();
let url = "https://jsonplaceholder.typicode.com/photos?_page="+ pageNumber;

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
        button.id= "likeButton";
        button.textContent= "like";

        div.className="box";
        div.appendChild(image);
        div.appendChild(parag);

        button.onclick = function(ev){
            let button =event.target;

            button.id= "dislikeButton";
            let id= button.id;
            button.textContent= "dislike";

            likeMe(id);

        }

        div.appendChild(button);

        boxes.appendChild(div);


}

let pageNumberDiv= document.createElement("div");
pageNumberDiv.id= "pageNumberDivId";
for (let i=0; i<10; i++){
  let pageNumberBox= document.createElement("button");
pageNumberBox.id="button"+i;
pageNumberBox.className= "pageBox";
pageNumberBox.href= url+ i;

  pageNumberDiv.appendChild(pageNumberBox);
}
}



function likeMe(id){
let button= document.getElementById(id);
button.onclick= function(){
button.id="likeButton";
      id= button.id;
      button.textContent="like";
      dislikeMe(id);
    }
  }


function dislikeMe(id){
let button= document.getElementById(id);
  button.onclick = function(){
    button.id="dislikeButton";
    id=button.id;
    button.textContent="dislike";
    likeMe(id);
  }
}
