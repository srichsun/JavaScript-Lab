/*jslint devel: true */

//execute the function once after brower downloaded all the files 
//一定要寫，否則在瀏覽器沒有下載完HTML時，就跑下面的getElementById，會抓不到。
window.onload = function () {

    function changeToBikini() {
        this.src = "http://s3.india.com/travel/wp-content/uploads/2016/05/Kate-Upton-main.jpg";
    }

    function changeToCatwalk() {
        this.src = "https://pbs.twimg.com/media/CGsNYMLWoAAcOYQ.jpg:large";
        //this 就是滑鼠指到的物件, 放在function裡面
    }

    var kateupon_pic = document.getElementById("kateupton");
    kateupon_pic.onmouseover = changeToBikini;
    kateupon_pic.onmouseout = changeToCatwalk;
    // 觸發function不用加()

};
