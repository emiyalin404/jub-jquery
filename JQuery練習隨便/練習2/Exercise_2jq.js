// 直接轉成JSON格式
fetch('./Exercise_2pic.json').then(function (response) {
    return response.json()
}).then(function (text) {
    console.log(text);

    //將json檔放入array
    var array = [];
    array.push(text[`text`]);

    //載入圖片
    picture();

    //移動全部的圖片
    all();

    //radio改變時將有add的class移除
    $("[name=operations][value=append], [name=operations][value=prepend]").change(function () {
        $("li").removeClass("add");
    });

    //判斷radio是否有做切換，以及圖片移動
    $(document).ready(function () {

        //點圖片給li加上一個class，如果li已經有相同class就消掉相同的
        $("li").click(function () {
            $(this).toggleClass("add");
            if ($('[name=operations][value=prepend]').is(':checked')) {
                console.log("7")
                pre();
            }
            else {
                app();
            }
        })
    });

    //載入圖片的方法
    function picture() {
        for (var key in array[0]) {
            var arr = array[0][key]["src"];
            let link = arr;
            //將圖片交錯放入已選擇和可選擇的ul標籤內
            if (key % 2 == 0) {
                $(".item-list.jq-leftbox").append("<li><img src='" + link + "'/></li>");
            }
            if (key % 2 == 1) {
                $(".item-list.jq-rightbox").append("<li><img src='" + link + "'/></li>");
            }
        };
    };

    //append的方法
    function app() {
        //移動選取的圖片到另一區圖片的最後面
        $(".jq-right").click(function () {
            $(".item-list.jq-rightbox").append($(".add"))
            $("li").removeClass("add");
        })
        $(".jq-left").click(function () {
            $(".item-list.jq-leftbox").append($(".add"))
            $("li").removeClass("add");
        })
    };

    //prepend的方法
    function pre() {
        //移動選取的圖片到另一區圖片的最前面
        $(".jq-right").click(function () {
            $(".item-list.jq-rightbox").prepend($(".add"))
            $("li").removeClass("add");
        })
        $(".jq-left").click(function () {
            $(".item-list.jq-leftbox").prepend($(".add"))
            $("li").removeClass("add");
        })
    };

    function all() {
        //移動全部圖片到另一區圖片的最後面
        let flag = false;
        $(".jq-rightall").click(function () {

            if ($("[name=operations][value=append]").is(':checked')) {
                flag = true
            }
            if (flag) {
                $(".item-list.jq-rightbox").append($(".jq-leftbox > li"))
                $("li").removeClass("add");
            }
            else {
                $(".item-list.jq-rightbox").prepend($(".jq-leftbox > li"))
                $("li").removeClass("add");
            }
        })
        //移動全部圖片到另一區圖片的最前面
        $(".jq-leftall").click(function () {
            if ($("[name=operations][value=append]").is(':checked')) {
                flag = true
            }
            if (flag) {
                console.log("3")
                $(".item-list.jq-leftbox").append($(".jq-rightbox > li"))
                $("li").removeClass("add");
            }
            else {
                console.log("4")
                $(".item-list.jq-leftbox").prepend($(".jq-rightbox > li"))
                $("li").removeClass("add");
            }
        });
    }

    //fecth失敗
}).catch(function (err) {
    // Error :(
})