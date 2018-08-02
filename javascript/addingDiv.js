
let counter = 0;

function changeMe(id) {
    let div = document.getElementById(id);



    let newText = prompt('write new text','');
    div.textContent = newText;


    let button1 = document.createElement('button');
    button1.textContent = "change";
    button1.style.backgroundColor= "orange";
    button1.style.color= "white";
      button1.style.margin="2%";

    button1.onclick = function(){
        let button = this;
        let div = button.parentElement;
        id = div.id;
        changeMe(id);
    };

    let button2 = document.createElement('button');
    button2.textContent = "delete";
    button2.style.backgroundColor= "red";
    button2.style.color= "white";
      button2.style.margin="2%";
    button2.onclick = function(){
        let button = this;
        let div = button.parentElement;
        id = div.id;
        deleteMe(id);
    };

    let button3 = document.createElement('button');
    button3.textContent = "choose";
    button3.style.backgroundColor= "green";
    button3.style.color= "white";
      button3.style.margin="2%";
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
    div.style.backgroundColor= "gray";
}

function chooseAll() {
    let divs = document.getElementsByClassName('row');
    for (let i=0; i<divs.length; i++){
        divs[i].style.backgroundColor="gray";
    }

}



function deleteChosen() {
    let divs = document.getElementsByClassName('row');

    for (let i=0;i<divs.length;i++) {
        if (divs[i].style.backgroundColor === "gray") {
            let body = document.body;
            body.removeChild(divs[i]);
            i--;
        }
    }

}


function add() {
    counter++;
    let id = "row"+counter;
    let body = document.body;
    let div = document.createElement('div');
    div.className = "row";
    div.style.padding="2%";
    div.style.border= "solid";
    div.id = id;
    div.textContent = document.getElementById('input').value;

    document.getElementById('input').value= null;

    let button1 = document.createElement('button');
    button1.textContent = "change";
    button1.style.backgroundColor= "orange";
    button1.style.color= "white";
    button1.style.margin="2%";
    button1.onclick = function(){
        let button = this;
        let div = button.parentElement;
        id = div.id;
        changeMe(id);
    };

    let button2 = document.createElement('button');
    button2.textContent = "delete";
    button2.style.backgroundColor= "red";
    button2.style.color= "white";
      button2.style.margin="2%";
    button2.onclick = function(){
        let button = this;
        let div = button.parentElement;
        id = div.id;
        deleteMe(id);
    };

    let button3 = document.createElement('button');
    button3.textContent = "choose";
    button3.style.backgroundColor= "green";
    button3.style.color= "white";
      button3.style.margin="2%";
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
