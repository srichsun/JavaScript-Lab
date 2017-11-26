/*jslint devel: true */


window.onload = function () {

    var textarea = document.getElementById("text_box");

    function changeText() {
        if (this.id === "first_pic") {
            textarea.innerHTML = "being together?";
        } else if (this.id === "second_pic") {
            textarea.innerHTML = "come to my home tonight?";
        } else {
            textarea.innerHTML = "go to travel together?";
        }
    }

    document.getElementById("first_pic").onmouseover = changeText;
    document.getElementById("second_pic").onmouseover = changeText;
    document.getElementById("third_pic").onmouseover = changeText;

};
