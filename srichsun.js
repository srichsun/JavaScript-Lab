window.onload = function () {


    function show() {
        document.getElementById("box" + this.id.substr(3)).style.display = "block";
    }
    document.getElementById("get1").onclick = show;
    document.getElementById("get2").onclick = show;
    document.getElementById("get3").onclick = show;
};
