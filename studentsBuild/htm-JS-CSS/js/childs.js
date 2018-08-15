

function addNewBlock(){
    let block = document.createElement("div");
    block.className="divs";
    block.style.backgroundColor="grey";
    let div2 = document.getElementById('div2');
    document.body.insertBefore(block, div2);
}

function addNewParagraph() {
    let div = document.getElementById("div1");
    let p = document.createElement("p");
    p.innerHTML = "123";
    div.appendChild(p);
}