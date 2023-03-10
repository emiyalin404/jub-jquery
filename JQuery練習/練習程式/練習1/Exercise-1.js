//讀取txt
$.ajax({
    url: "Exercise-1-read.txt",
    success: function (data, status) {
        $("#sample-dom").html(data);
        var d = $("#sample-dom-source").text(data);
        //按下確定
        $("#button-apply").click(function () {
            var result = "";
            var rr = $("#selector").val();
            var dd = "";
            var qq = $("tr td:first-child").length
            var r = "";

            //判斷符合選擇器欄位，執行相對應的效果
            for (var i = 0; i < qq; i++) {
                dd = $("tr td:first-child").eq(i).text();
                if (dd == rr) {
                    result = $("tr td:nth-child(2)").eq(i).text();
                    $("#jquery-statement").text("JQuery語句:" + result + ('.addClass.("found-element");'));
                    if (i == 9)
                        t = $("#sample-dom").find($("div>p")).addClass("found-element");
                    else if (i == 10)
                        t = $("#sample-dom").find($("div p")).addClass("found-element");
                    else
                        t = $("#sample-dom").find($(rr)).addClass("found-element");
                }
            }

            //判斷符合選擇器欄位，並將文字替換，執行相對應的效果
            if (/[a-zA-Z]/.test(rr) && !/[#.]/.test(rr) && !/[parent]/.test(rr)) {
                dd = $("tr td:first-child").eq(4).text();
                result = $("tr td:nth-child(2)").eq(4).text();
                show();
            }
            if (/[.][A-Za-z]/.test(rr) && !/[,:#]/.test(rr)) {
                dd = $("tr td:first-child").eq(2).text();
                result = $("tr td:nth-child(2)").eq(2).text();
                show();
            }
            if (/[.][A-Za-z]+[,]+[.][A-Za-z]/.test(rr) && !/[:#]/.test(rr)) {
                dd = $("tr td:first-child").eq(3).text();
                result = $("tr td:nth-child(2)").eq(3).text();
                show();
            }
            if (/[#][A-Za-z]/.test(rr) && !/[,.]/.test(rr)) {
                dd = $("tr td:first-child").eq(1).text();
                result = $("tr td:nth-child(2)").eq(1).text();
                show();
            }

            //顯示結果筆數
            $("#resulting-elements-count").text("匹配結果:" + t.length);
            for (var i = 0; i < t.length; i++) {
                a1 = $(".found-element")[i].localName.toUpperCase();
                a2 = $(".found-element")[i].id;
                e = (a1 + a2);
                r += e;
            }

            //顯示符合搜尋結果的標籤                                                                        
            $("#resulting-elements").text(r);

            //顯示JQuery語句的方法
            function show() {
                $("#jquery-statement").text("JQuery語句:" + '$("' + rr + '")' + ('.addClass.("found-element");'));
                t = $("#sample-dom").find($(rr)).addClass("found-element");
            }
        })
    },
    
    //沒讀取到txt的話執行
    error: function (data, status) {
        console.log(arguments)
    }
});
/**/
//txt的方法
function readTxt() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "Exercise-1-read.txt", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr);
            console.log(xhr.responseText);
        } else if (xhr.status == 404) {
            console.log(xhr.status);
        }
    };
}
readTxt()