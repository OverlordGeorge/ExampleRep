

function requestPage(n){
  let url= "https://jsonplaceholder.typicode.com/photos?_page=" + n;
  let request= new XMLHttpRequest();
  request.open('GET', url, true);
  request.send();

  request.onreadystatechange = function () {
          if (request.responseText !== ""){
              deleteBoxes();
              let data = request.responseText;
              console.log(data);
              dealWithData(JSON.parse(data));
          }
    }

}



function deleteBoxes(){
  let div= document.getElementsByClassName("boxes")[0];

  while (div.firstChild){
      let child = div.firstChild;
      div.removeChild(child);
}

}

//requestPage(4);
