window.onload = function () {

    var n = 0;

    function changpic(a) {

        var number = this.id.substr(8);
        document.getElementById("image").src = "images/number_" + number + ".jpg";

        a.preventDefault();
    }

    document.getElementById("picture_1").onclick = changpic;
    document.getElementById("picture_2").onclick = changpic;
    document.getElementById("picture_3").onclick = changpic;
    document.getElementById("picture_4").onclick = changpic;
    document.getElementById("picture_5").onclick = changpic;
};
