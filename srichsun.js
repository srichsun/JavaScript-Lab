$(function () {

    $('#sportbutton').click(function () {
        $('#sport').fadeIn(800);
        $('#men').fadeOut(800);
        $('#woman').fadeOut(800);
    });

    $('#menbutton').click(function () {
        $('#sport').fadeOut(800);
        $('#men').fadeIn(800);
        $('#woman').fadeOut(800);
    });

    $('#womanbutton').click(function () {
        $('#sport').fadeOut(800);
        $('#men').fadeOut(800);
        $('#woman').fadeIn(800);
    });

});
