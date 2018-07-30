
let counter;

function changeMe(id) {
    let row = document.getElementById(id);
    let input = document.createElement('input');
    row.replaceWith(input)
    /*addEventListener("keypress", function onEvent(event) {
      if (event.key === "Enter") {
    row.replaceWith(newName);
  }
}*/

}

function deleteMe(id) {
    let div = document.getElementById(id);
    let body = document.body;
    body.removeChild(div);
}

function chooseMe(id) {
    let div = document.getElementById(id);
    div.style.backgroundColor= "brown";
}

function chooseAll(id) {
    let div = document.getElementById(id);
    div.style.backgroundColor="brown";
}



function add() {
    counter++;
    let id = "row"+counter;
    let body = document.body;
    let div = document.createElement('div');
    div.className = "row";
    div.style.border= "solid";
    div.id = id;
    div.textContent = document.getElementById('input').value;

    let button1 = document.createElement('button');
    button1.textContent = "change";
    button1.onclick = function(){
        let button = this;
        let div = button.parentElement;
        id = div.id;

        changeMe(id);
    };

    let button2 = document.createElement('button');
    button2.textContent = "delete";
    button2.onclick = function(){
        let button = this;
        let div = button.parentElement;
        id = div.id;
        deleteMe(id);
    };

    let button3 = document.createElement('button');
    button3.textContent = "choose";
    button3.onclick = function(){
        let button = this;
        let div = button.parentElement;
        id = div.id;
        chooseMe(id);
    };
      div.appendChild(button1);
      div.appendChild(button2);
      div.appendChild(button3);
      let before= document.getElementById('bottomBtns');
       body.insertBefore(div, before);
  }
