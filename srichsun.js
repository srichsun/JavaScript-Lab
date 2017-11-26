window.onload = function () {

    var n = 1,
        pic = document.getElementById("image"),
        changing = 0;


    function changepic() {
        if (n === 7) {
            n = 1;
        }
        pic.src = "images/number_" + n + ".jpg";
        n = n + 1;
    }

    function START() {
        clearInterval(changing);
        changing = setInterval(changepic, 500);
    }

    function STOP() {
        clearInterval(changing);
    }

    function PREVIOUS() {
        if (n === 1) {
            n = 7;
        }
        n = n - 1;
        pic.src = "images/number_" + n + ".jpg";
    }

    function NEXT() {
        if (n === 6) {
            n = 0;
        }
        n = n + 1;
        pic.src = "images/number_" + n + ".jpg";
    }
    document.getElementById("image").onmouseover = START;
    document.getElementById("image").onmouseout = STOP;

    document.getElementById("previous").onclick = PREVIOUS;
    document.getElementById("next").onclick = NEXT;

};
