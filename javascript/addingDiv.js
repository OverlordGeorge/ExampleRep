
let counter = 0;

function changeMe(id) {
    let div = document.getElementById(id);


    //read new text from prompt (like alert)
    let newText = prompt('write new text','');
    div.textContent = newText;
    // after changing text content we lost all buttons so lets
    // return them
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
    //this is not the best way but its working
    //it would be better to use one function for adding and changing

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
      let before = document.getElementById('bottomBtns');
      body.insertBefore(div, before);
  }
