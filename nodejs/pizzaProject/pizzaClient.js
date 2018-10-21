function filterName(){
    let name = $("#input").val();

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/sendName",
        data: {
            'name': name


        },
        success: function (data){
            alert(data);
        }
    });
}


}