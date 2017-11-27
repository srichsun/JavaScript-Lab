$(function () {

    $('#sportbutton').click(function () {
        $('#sport').fadeIn(800);
        $('#men, #woman').fadeOut(800);
    });

    $('#menbutton').click(function () {
        $('#men').fadeIn(800);
        $('#woman, #sport').fadeOut(800);
    });

    $('#womanbutton').click(function () {
        $('#woman').fadeIn(800);
        $('#sport, #men').fadeOut(800);
    });

});
