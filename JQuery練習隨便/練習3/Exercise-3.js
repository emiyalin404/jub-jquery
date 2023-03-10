
//設置農曆新年的時鐘
let new_year = new Date("2024-02-10 00:00:00");
let year = new_year.getFullYear();
console.log(year);

//顯示[距xxxx年春節.....]
let txt = "距年春節還有天  分秒"
for (let i = 0; i < txt.length; i++) {
    if (i == 1)
        $('#d1').append("<label>" + year + "</label>")
    if (i == 6)
        $('#d2').append("<label id='dd'>" + "</label>")
    if (i == 7) {
        $('#d2').append("<label id='hh'>" + "</label>")
        continue;
    }
    if (i == 8) {
        $('#d2').append("<label>" + '小時' + "</label>")
        continue;
    }
    if (i == 9)
        $('#d2').append("<label id='mm'>" + "</label>")
    if (i == 10)
        $('#d2').append("<label id='ss'>" + "</label>")
    if(i<=5)
    $('#d1').append("<label>" + txt[i] + "</label>")
    if(i>5)
    $('#d2').append("<label>" + txt[i] + "</label>")
}

$(function () {

    //new現在時間，並進行換算
    function time() {
        let dt = new Date();
        let total = Date.parse(new_year) - Date.parse(dt);
        var day = Math.floor(total / (1000 * 60 * 60 * 24));
        var hour = Math.floor((total / (1000 * 60 * 60)) % 24);
        var min = Math.floor((total / 1000 / 60) % 60);
        var sec = Math.floor((total / 1000) % 60);
        //顯示時間
        // console.log(sec);
        $('#dd').text(day);
        $('#hh').text(hour);
        $('#mm').text(min);
        $('#ss').text(sec);
    }

    //每秒執行一次
    setInterval(time, 1000);
});