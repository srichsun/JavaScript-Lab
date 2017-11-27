$(function () {

    //    show

    $("#hide").click(function () {
        $('#pic').hide(500);
    });

    $("#toggle").click(function () {
        $('#pic').toggle(500);
    });

    //    slide
    $("#slideDown").click(function () {
        $('#pic').slideDown(500);
    });

    $("#slideUp").click(function () {
        $('#pic').slideUp(500);
    });

    $("#slideToggle").click(function () {
        $('#pic').slideToggle(500);
    });

    //    fade
    $("#fadeIn").click(function () {
        $('#pic').fadeIn(500);
    });

    $("#fadeOut").click(function () {
        $('#pic').fadeOut(500);
    });

    $("#fadeTo").click(function () {
        $('#pic').fadeTo(500, 0.5);
    });

    $("#fadeTo2").click(function () {
        $('#pic').fadeTo(500, 0.2);
    });




});
