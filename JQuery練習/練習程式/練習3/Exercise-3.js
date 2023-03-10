//設置農曆新年的時鐘
let new_year = new Date("2023-01-22 00:00:00");

$(function () {

    //new現在時間，並進行換算
    function time() {
        let dt = new Date();
        let dat = dt.getDate();
        let total = Date.parse(new_year) - Date.parse(dt);
        var day = Math.floor(total / (1000 * 60 * 60 * 24));
        var hour = Math.floor((total / (1000 * 60 * 60)) % 24);
        var min = Math.floor((total / 1000 / 60) % 60);
        var sec = Math.floor((total / 1000) % 60);

        //顯示時間
        console.log(sec);
        $('#dd').text(day);
        $('#hh').text(hour);
        $('#mm').text(min);
        $('#ss').text(sec);

    }

    //每秒執行一次
    setInterval(time, 1000);
});