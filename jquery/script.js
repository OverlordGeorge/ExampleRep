

function doSomething() {
    let div = $('#simpleDiv');
    /*div.fadeOut(1000);
    div.fadeIn(1000);*/
    div.animate({
        opacity: 0.5,
        height: '200px',
        width: '200px'
    }, 1500);
}

function redirectToSomewher() {
    $('html,body').animate({
        scrollTop: $("#red5").offset().top
    }, 1000, function () {
        location.hash="red4";
    });
}
