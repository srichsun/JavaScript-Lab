/*jslint devel: true */


window.onload = function () {

    function changeMainPicture() {
        document.getElementById("main_picture").src = this.src;
    }

    document.getElementById("first_pic").onclick = changeMainPicture;
    document.getElementById("second_pic").onclick = changeMainPicture;
    document.getElementById("third_pic").onclick = changeMainPicture;

};
