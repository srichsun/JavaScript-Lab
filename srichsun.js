window.onload = function () {

    var n = 1;

    var pic = document.getElementById("image");

    function changepic() {
        if (n === 7) {
            n = 1;
        }
        pic.src = "images/" + n + ".jpg";
        n = n + 1;
    }


    setInterval(changepic, 1000);
};
