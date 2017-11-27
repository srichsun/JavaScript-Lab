window.onload = function () {

    var target = document.getElementById("colorPLACE");

    function darktheme() {
        target.className = "dark-bg";
    }

    function lighttheme() {
        target.className = "light-bg";
    }

    target.onmouseover = darktheme;
    target.onmouseout = lighttheme;

};
