function showNames() {

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/getNames",
        success: function (msg) {
            $("#nameList").empty();
            for (let i = 0; i < msg.length; i++) {
                $("#nameList").append("<p>" + msg[i] + "</p>");
            }

        }
    });

}

function sendName(){
    let name = $("#input").val();
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/sendName",
        data: {
            'name': name,
            'age': 13,
            'gender': 'male'
        }
    });
}
