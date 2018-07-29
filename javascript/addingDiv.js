
let counter = 2;

function deleteMe(id) {
    let div = document.getElementById(id);
    let body = document.body;
    body.removeChild(div);
}

function add() {

    let counter++;
    let id = "row"+counter;
    let body = document.body;
    let div = document.createElement('div');
    div.className = "row";
    div.id = id;
    div.textContent = "text";

    let button = document.createElement('button');
    button.textContent = "delete";
    button.onclick = function(){
        let button = this;
        let div = button.parentElement;
        id = div.id;
        deleteMe(id);
    };
      div.appendChild(button);
    body.appendChild(div);
  }
