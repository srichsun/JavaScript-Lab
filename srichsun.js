window.onload = function () {


    function becomesmall() {
        document.getElementById("text").style.fontSize = "5px";
    }

    function becomehuge() {
        document.getElementById("text").style.fontSize = "50px";
    }

    document.getElementById("small").onclick = becomesmall;
    document.getElementById("big").onclick = becomehuge;
};
