window.onload = function () {

    var n = 0;

    function changpic() {
        switch (this.id) {
            case "first":
                n = 1;
                break;
            case "second":
                n = 2;
                break;
            case "third":
                n = 3;
                break;
            case "fourth":
                n = 4;
                break;
            case "fifth":
                n = 5;
                break;
        }

        document.getElementById("image").src = "images/number_" + n + ".jpg";

        return false;
    }

    document.getElementById("first").onclick = changpic;
    document.getElementById("second").onclick = changpic;
    document.getElementById("third").onclick = changpic;
    document.getElementById("fourth").onclick = changpic;
    document.getElementById("fifth").onclick = changpic;
};
