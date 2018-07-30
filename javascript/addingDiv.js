
let counter = 1;

function changeMe(id) {
    let name = document.getElementById(id);
    let input = document.getElementById(input);
    name.replaceWith(input);
    name= input.value;

}

function deleteMe(id) {
    let div = document.getElementById(id);
    let body = document.body;
    body.removeChild(div);
}

function chooseMe(id) {
    let div = document.getElementById(id);
    div.style.backgroundColor= brown;
}

function chooseAll(id) {
    let div = document.getElementById(id);
    div.style.backgroundColor= brown;
}



function add() {
    counter++;
    let id = "row"+counter;
    let body = document.body;
    let div = document.createElement('div');
    div.className = "row";
    div.id = id;
    div.textContent = document.getElementById('input').value;

    let button1 = document.getElementById('change');
    button1.onclick = function(){
        let button = this;
        let div = button.parentElement;
        id = div.id;
        changeMe(id);
    };

    let button2 = document.getElementById('delete');
    button2.onclick = function(){
        let button = this;
        let div = button.parentElement;
        id = div.id;
        deleteMe(id);
    };

    let button3 = document.getElementById('choose');
    button3.onclick = function(){
        let button = this;
        let div = button.parentElement;
        id = div.id;
        chooseMe(id);
    };
      div.appendChild(button1);
      div.appendChild(button2);
      div.appendChild(button3);
      body.appendChild(div);
  }
