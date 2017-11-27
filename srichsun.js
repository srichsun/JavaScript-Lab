window.onload = function () {

    var target = document.getElementById("numnum"),
        girl = document.getElementById("girl"),
        n = 0;

    function show() {
        target.style.display = "block";
    }

    function hide() {
        target.style.display = "";
    }

    function addup() {
        if (n === 6) {
            n = 0;
        }
        n = n + 1;
        target.innerHTML = n;
        girl.src = "images/" + n + ".jpg";
    }

    girl.onmouseover = show;
    girl.onmouseout = hide;
    girl.onclick = addup;

};
