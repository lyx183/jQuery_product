new Promise(function (resolve, reject) {
    $.ajax({
        type: "post",
        url: "/index/recommend.do",
        data: {},
        dataType: "json",
        success: function (data) {
            var data = data.data;
            resolve(data);
        }
    })
}).then(function (data) {
    console.log(data)
    var oUl = $(".recom_goods");
    var str = ""
    for (var i = 0; i < data.length; i++) {
        if ((i + 1) % 4 == 0) {
            str += `<li class="last">
        <a href="##">
            <div class="p_img">
                <img src="${data[i].imgUrl}" goodsId="${data[i].goodsId}" title="${data[i].goodsNm}" price="${data[i].haoPrc}" alt="">
            </div>
        </a>
        <p class="p_title">
            <a href="##">${data[i].goodsNm}</a>
        </p>
        <p class="p_p">
            <span class="price1">¥
                <span>${data[i].haoPrc}</span>
            </span>
            <a href="##"></a>
        </p>
    </li>`
        }else{
            str += `<li>
        <a href="##">
            <div class="p_img">
                <img src="${data[i].imgUrl}" goodsId="${data[i].goodsId}" title="${data[i].goodsNm}" price="${data[i].haoPrc}" alt="">
            </div>
        </a>
        <p class="p_title">
            <a href="##">${data[i].goodsNm}</a>
        </p>
        <p class="p_p">
            <span class="price1">¥
                <span>${data[i].haoPrc}</span>
            </span>
            <a href="##"></a>
        </p>
    </li>`
        }
    }
    oUl.html(str);
    var recomImg = $(".recom_goods>li .p_img>img");
    var p_p = $(".recom_goods>li .p_p>a")
    console.log(p_p)    
    recomImg.click(function(e){
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
    p_p.click(function(e){
        var goodsId = $(e.target).parent().prev().prev().find("img").attr("goodsId");
        var title = $(e.target).parent().prev().prev().find("img").attr("title");
        var src = $(e.target).parent().prev().prev().find("img").attr("src")
        if($(e.target).parent().prev().prev().find("img").attr("price")){
            var price = $(e.target).parent().prev().prev().find("img").attr("price");
        }
        location.href="detail.html?id="+goodsId;
        var obj = {}
        obj.goodsId = goodsId;
        obj.title = title;
        obj.src = src;
        obj.price = price;
        console.log(obj)
        localStorage.setItem(goodsId,JSON.stringify(obj))
    })
})
