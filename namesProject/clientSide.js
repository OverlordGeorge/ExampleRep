function showNames() {

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/getNames",
        success: function (msg) {
            for (let i = 0; i < msg.length; i++) {
                $("#nameList").append("<p>" + msg[i] + "</p>");
            }

        }
    });

}

function sendName(){

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/sendName",
        success: function (msg) {
            for (let i = 0; i < msg.length; i++) {
                $("#nameList").append("<p>" + msg[i] + "</p>");
            }

        }
    });
}