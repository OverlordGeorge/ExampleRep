<<<<<<< HEAD


function requestPage(n){
  let url= "https://jsonplaceholder.typicode.com/photos?_page=" + n;
  let request= new XMLHttpRequest();
=======
function requestPage(n){
  let url= "https://jsonplaceholder.typicode.com/photos?_page=" + n;
  let request= new XMLHttpRequest();
deleteBoxes();
>>>>>>> Brianna
  request.open('GET', url, true);
  request.send();

  request.onreadystatechange = function () {
          if (request.responseText !== ""){
<<<<<<< HEAD
              deleteBoxes();
              let data = request.responseText;
              console.log(data);
              dealWithData(JSON.parse(data));
          }
    }

}
=======
              let data = request.responseText;


dealWithData(data);
          }

}}
>>>>>>> Brianna



function deleteBoxes(){
  let div= document.getElementsByClassName("boxes")[0];

  while (div.firstChild){
      let child = div.firstChild;
<<<<<<< HEAD
      div.removeChild(child);
=======
      div.remove(child);
>>>>>>> Brianna
}

}

//requestPage(4);
