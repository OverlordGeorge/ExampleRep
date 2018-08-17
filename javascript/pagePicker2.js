function requestPage(n){
  let url= "https://jsonplaceholder.typicode.com/photos?_page=" + n;
  let request= new XMLHttpRequest();
deleteBoxes();
  request.open('GET', url, true);
  request.send();

  request.onreadystatechange = function () {
          if (request.responseText !== ""){
              let data = request.responseText;


dealWithData(data);
          }

}}



function deleteBoxes(){
  let div= document.getElementsByClassName("boxes")[0];

  while (div.firstChild){
      let child = div.firstChild;
      div.remove(child);
}

}

//requestPage(4);
