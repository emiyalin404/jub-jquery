// 直接轉成JSON格式
fetch('./Exercise_2pic.json').then(function (response) {
    return response.json()
}).then(function (text) {
    console.log(text);

    //將json檔放入array
    var aa = [];
    aa.push(text[`text`]);
    let ullt = document.querySelector('.item-list.jq-leftbox')
    let ulrt = document.querySelector('.item-list.jq-rightbox')

    //載入圖片
    picture();

    //一開始append的狀態下，執行
    $(document).ready(function () {
        $("[name=operations][value=append]").prop('checked', true);
        app();
    });
    //判斷radio是否有做切換，以及圖片移動
    $(document).ready(function () {
        $("[name=operations][value=append], [name=operations][value=prepend]").change(function () {
            $("li").removeClass("add");
            $("li").click(function () {
                $(this).toggleClass("add");
                if ($('[name=operations][value=append]').is(':checked')) {
                    app();
                }
                else {
                    pre();
                }
            })
        });
    });


    //載入圖片的方法
    function picture() {
        for (var key in aa[0]) {
            let li = document.createElement('li');
            var s = aa[0][key]["src"];
            let link = s;
            if (key % 2 == 0) {
                li.innerHTML = "<img src='" + link + "'/>";
                ullt.appendChild(li);
            }
            if (key % 2 == 1) {
                li.innerHTML = "<img src='" + link + "'/>";
                ulrt.appendChild(li);
            }
        };
    };

    //append的方法
    function app() {
        //點圖片給li加上一個class如果有該class就消掉
        $("li").click(function () {
            $(this).toggleClass("add");

            //移動選取的圖片到另一區圖片的最後面
            $(".jq-right").click(function () {
                $(".item-list.jq-rightbox").append($(".add"))
            })
            $(".jq-left").click(function () {
                $(".item-list.jq-leftbox").append($(".add"))
            })
        });

        //移動全部圖片到另一區圖片的最後面
        $(".jq-rightall").click(function () {
            $(".item-list.jq-rightbox").append($(".jq-leftbox > li"))
        })
        $(".jq-leftall").click(function () {
            $(".item-list.jq-leftbox").append($(".jq-rightbox > li"))
        });
    };

    //prepend的方法
    function pre() {
        //點圖片給li加上一個class如果有該class就消掉
        $("li").click(function () {
            $(this).toggleClass("add");

            //移動選取的圖片到另一區圖片的最後面
            $(".jq-right").click(function () {
                $(".item-list.jq-rightbox").prepend($(".add"))
            })
            $(".jq-left").click(function () {
                $(".item-list.jq-leftbox").prepend($(".add"))
            })
        })

        //移動全部圖片到另一區圖片的最後面
        $(".jq-rightall").click(function () {
            console.log($("li"))
            $(".item-list.jq-rightbox").prepend($(".jq-leftbox > li"))

        })
        $(".jq-leftall").click(function () {
            console.log($("li"))
            $(".item-list.jq-leftbox").prepend($(".jq-rightbox > li"))
        });
    };
    //fecth失敗
}).catch(function (err) {
    // Error :(
})