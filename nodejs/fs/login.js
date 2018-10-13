function sendLogin(){
    let login = $("#login").val();
    let password= $("#pass").val();
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/sendLogin",
        data: {
            'login': login,
            'password': password,

        },
        success: function (data){
            alert(data);
        }
    });
}

function register() {


}