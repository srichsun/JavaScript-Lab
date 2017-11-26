window.onload = function () {


    function show() {
        document.getElementById("box" + this.id.substr(3)).style.display = "block";
    }

    function hide() {
        document.getElementById("box" + this.id.substr(3)).style.display = "none";
    }

    document.getElementById("get1").onmouseover = show;
    document.getElementById("get2").onmouseover = show;
    document.getElementById("get3").onmouseover = show;
    document.getElementById("get1").onmouseout = hide;
    document.getElementById("get2").onmouseout = hide;
    document.getElementById("get3").onmouseout = hide;
};
