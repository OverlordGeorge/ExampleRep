

//First make the first page automatically show up

let request = new XMLHttpRequest();
let url = "https://jsonplaceholder.typicode.com/photos?_page=1";

request.open('GET', url, true);
request.send();

request.onreadystatechange = function () {
        if (request.responseText !== ""){
            deleteBoxes();
            let data = request.responseText;
            dealWithData(JSON.parse(data));

        }

};
//Show the first page boxes and page buttons

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
        button.className = "likeButton";
        button.textContent= "like";

        div.className="box";
        div.appendChild(image);
        div.appendChild(parag);

        button.onclick = function(ev){
           /* let button =event.target;

            button.id= "dislikeButton";
            let id= button.id;
            button.textContent= "dislike";

            likeMe(id);*/

        }

        div.appendChild(button);

        boxes.appendChild(div);


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
