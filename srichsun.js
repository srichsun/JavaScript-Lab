window.onload = function () {

    var n = 1,
        pic = document.getElementById("image"),
        changing = 0;


    function changepic() {
        if (n === 7) {
            n = 1;
        }
        pic.src = "images/" + n + ".jpg";
        n = n + 1;
    }

    function START() {
        clearInterval(changing);
        changing = setInterval(changepic, 500);
    }

    function STOP() {
        clearInterval(changing);
    }

    document.getElementById("start").onclick = START;
    document.getElementById("stop").onclick = STOP;

};
