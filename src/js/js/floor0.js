new Promise(function (resolve, reject) {
    $.ajax({
        type: "post",
        url: "/index/floor-100.do",
        data: {},
        dataType: "json",
        success: function (data) {
            var data = data.data;
            resolve(data);
        }
    })
}).then(function (data) {
    var floor0 = $(".floor0")
    floor0.css("background","none");
    content(floor0, data)
    var content_right = $(".floor0>.tab_content>.tab_content_right");
    var ali = $(".floor0>.title>ul>li");
    var oImg = $(".floor0>.tab_content img");
    var iNow = 0;
    var Next = 0;
    ali.mouseover(function () {
        ali.eq($(this).index()).addClass("active").siblings().removeClass("active")
        Next = $(this).index();
        toImg();
    })
    oImg.click(function(e){
        var goodsId = $(e.target).attr("goodsId");
        var title = $(e.target).attr("title");
        var src = $(e.target).attr("src")
        if($(e.target).attr("price")){
            var price = $(e.target).attr("price");
        }
        location.href="detail.html?id="+$(e.target).attr("goodsId");
        var obj = {}
        obj.goodsId = goodsId;
        obj.title = title;
        obj.src = src;
        obj.price = price;
        console.log(obj)
        localStorage.setItem(goodsId,JSON.stringify(obj))
    })
    function toImg() {
        content_right.eq(iNow).stop(true).fadeTo(500, 0);
        content_right.eq(Next).stop(true).fadeTo(500, 1);
        content_right.eq(iNow).css("display", "none");
        content_right.eq(Next).css("display", "block");
        iNow = Next;
    }

})
