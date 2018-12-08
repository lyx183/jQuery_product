new Promise(function (resolve, reject) {
    $.ajax({
        type: "post",
        url: "/index/class.do",
        data: {},
        dataType: "json",
        success: function (data) {
            var data = data.data;
            resolve(data)
        }
    })
}).then(function (data) {
    var str = "";
    var oUl = $(".all_cate>ul")
    for (var i = 0; i < data.length; i++) {
        var str1 = "";
        for (var j = 0; j < data[i].catList.length; j++) {
            var str3 = "";
            for (var k = 0; k < data[i].catList[j].catList.length; k++) {
                str3 += `<a href="##">${data[i].catList[j].catList[k].catNm}<span>|</span></a>`
            }
            str1 += `<li>
                <h2><a href="##">${data[i].catList[j].catNm}</a></h2>
                <div class="sub_mask_text">
                    <a href="##">${str3}</a>
                </div>
            </li>`
        }
        str += `<li>
            <i><img src="${data[i].imgUrl}" alt=""></i>
            <a href="##">${data[i].catNm}</a>
            <ul class="hide_mask">${str1}</ul>
        </li>`
    }
    oUl.html(str);
    oUl.on({
        mouseover: ulblock,
        mouseout: ulnone,
    }, "li")
})

function ulblock() {
    $(this).find("ul").css({
        "display": "block",
    })
}
function ulnone() {
    $(this).find("ul").css({
        "display": "none",
    })
}