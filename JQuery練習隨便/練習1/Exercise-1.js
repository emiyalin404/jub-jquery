//讀取txt
$.ajax({
    url: "Exercise-1-read.txt",
    success: function (data, status) {
        $("#sample-dom").html(data);
        $("#sample-dom-source").text(data);
        //按下確定
        $("#button-apply").click(function () {
            var result = "";
            var selectorval = $("#selector").val();
            var data = "";
            var tdlength = $("tr td:first-child").length
            var resultcount = "";

            //判斷符合選擇器欄位，執行相對應的效果
            for (var i = 0; i < tdlength; i++) {
                data = $("tr td:first-child").eq(i).text();
                if (data == selectorval) {
                    result = $("tr td:nth-child(2)").eq(i).text();
                    $("#jquery-statement").text("JQuery語句:" + result + ('.addClass.("found-element");'));
                    if (i == 9)
                        tatol = $("#sample-dom").find($("div>p")).addClass("found-element");
                    else if (i == 10)
                    tatol = $("#sample-dom").find($("div p")).addClass("found-element");
                    else
                    tatol = $("#sample-dom").find($(selectorval)).addClass("found-element");
                }
            }

            //判斷符合選擇器欄位，並將文字替換
            if (selectorval == "parent > child") {
                data = $("tr td:first-child").eq(9).text();
                result = $("tr td:nth-child(2)").eq(9).text();
                $("#jquery-statement").text("JQuery語句:" + '$("' + `div > p` + '")' + ('.addClass.("found-element");'));
                tatol = $("#sample-dom").find($(`div > p`)).addClass("found-element");
            }
            if (selectorval == "parent descendant") {
                data = $("tr td:first-child").eq(10).text();
                result = $("tr td:nth-child(2)").eq(10).text();
                $("#jquery-statement").text("JQuery語句:" + '$("' + `div p` + '")' + ('.addClass.("found-element");'));
                tatol = $("#sample-dom").find($(`div p`)).addClass("found-element");
            }
            if (!/[#.]/.test(selectorval) && selectorval != "parent descendant"&&selectorval != "parent > child") {
                data = $("tr td:first-child").eq(4).text();
                result = $("tr td:nth-child(2)").eq(4).text();
                show();
            }
            if (/[.][A-Za-z]/.test(selectorval) && !/[,:#]/.test(selectorval)) {
                data = $("tr td:first-child").eq(2).text();
                result = $("tr td:nth-child(2)").eq(2).text();
                show();
            }
            if (/[.][A-Za-z]+[,]+[.][A-Za-z]/.test(selectorval) && !/[:#]/.test(selectorval)) {
                data = $("tr td:first-child").eq(3).text();
                result = $("tr td:nth-child(2)").eq(3).text();
                show();
            }
            if (/[#][A-Za-z]/.test(selectorval) && !/[,.]/.test(selectorval)) {
                data = $("tr td:first-child").eq(1).text();
                result = $("tr td:nth-child(2)").eq(1).text();
                show();
            }

            //顯示結果筆數
            $("#resulting-elements-count").text("匹配結果:" + tatol.length);
            for (var i = 0; i < tatol.length; i++) {
                htmlname = $(".found-element")[i].localName.toUpperCase();
                htmlid = $(".found-element")[i].id;
                htmlnamehtmlid = (htmlname + "#" + htmlid);
                resultcount += htmlnamehtmlid;
            }

            //顯示符合搜尋結果的標籤                                                                        
            $("#resulting-elements").text(resultcount);
            console.log(resultcount);
            //顯示JQuery語句的方法
            function show() {
                $("#jquery-statement").text("JQuery語句:" + '$("' + selectorval + '")' + ('.addClass.("found-element");'));
                tatol = $("#sample-dom").find($(selectorval)).addClass("found-element");
            }
        })
    },

    //沒讀取到txt的話執行
    error: function (data, status) {
        console.log(arguments)
    }
});