/*jslint devel: true */

//execute the function once after brower downloaded all the files 
//一定要寫，否則在瀏覽器沒有下載完HTML時，就跑下面的getElementById，會抓不到。
window.onload = function () {

    function changeToBikini() {
        document.getElementById("kateupton").src = "http://s3.india.com/travel/wp-content/uploads/2016/05/Kate-Upton-main.jpg";
    }

    function changeToCatwalk() {
        document.getElementById("kateupton").src = "https://pbs.twimg.com/media/CGsNYMLWoAAcOYQ.jpg:large";
    }

    document.getElementById("kateupton").onmouseover = changeToBikini;
    document.getElementById("kateupton").onmouseout = changeToCatwalk;
    //    觸發function不用加()

};
