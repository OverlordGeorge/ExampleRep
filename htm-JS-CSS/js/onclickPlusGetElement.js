function sayHello() {
    let input = document.getElementById("name");
    let text = input.value;

    if (text===""){
        alert("write the name");
       // return;
    }
    else{
        let greet = document.getElementById("greetings");
        greet.innerHTML = "Hello " + text;
    }

    //let greet = document.getElementById("greetings");
   // greet.innerHTML = "Hello " + text;
}