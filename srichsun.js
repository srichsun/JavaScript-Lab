window.onload = function () {

    var n = 1;

    function changepic() {
        if (n === 7) {
            n = 1;
        }
        this.src = "images/" + n + ".jpg";
        n = n + 1;
    }

    document.getElementById("image").onclick = changepic;
};
