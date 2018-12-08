function content(floor, data) {
    var str = "";
    var str1 = "";
    var str2 = "";
    var str3 = "";
    //title
    for (var key in data.categoryMap) {
        str1 += `<li><a href="##">${data.categoryMap[key]}</a></li>`
    }
    //除热门以外的数据（动态创建div并插入界面）
    for (var key in data.simpleGoodsHashMap) {
        //在div中插入的数据
        str2 = `<ul>
            <li class="fore">
                <div class="sp_img">
                    <a href="##">
                        <img src="${data.simpleGoodsHashMap[key][0].imgUrl}" price="${data.simpleGoodsHashMap[key][0].haoPrc}" title="${data.simpleGoodsHashMap[key][0].goodsNm}" goodsId="${data.simpleGoodsHashMap[key][0].goodsId}" width="160" height="160">
                    </a>
                    <div class="sp_name">
                        <a href="##">${data.simpleGoodsHashMap[key][0].goodsNm}</a>
                    </div>
                    <div class="sp_price">¥${data.simpleGoodsHashMap[key][0].haoPrc}</div>
                </div>
            </li>
            <li class="fore">
                <div class="sp_img">
                    <a href="##">
                        <img src="${data.simpleGoodsHashMap[key][1].imgUrl}" price="${data.simpleGoodsHashMap[key][1].haoPrc}" title="${data.simpleGoodsHashMap[key][1].goodsNm}" goodsId="${data.simpleGoodsHashMap[key][1].goodsId}" width="160" height="160">
                    </a>
                    <div class="sp_name">
                        <a href="##">${data.simpleGoodsHashMap[key][1].goodsNm}</a>
                    </div>
                    <div class="sp_price">¥${data.simpleGoodsHashMap[key][1].haoPrc}</div>
                </div>
            </li>
            <li class="fore">
                <div class="sp_img">
                    <a href="##">
                        <img src="${data.simpleGoodsHashMap[key][2].imgUrl}" price="${data.simpleGoodsHashMap[key][2].haoPrc}" title="${data.simpleGoodsHashMap[key][2].goodsNm}" goodsId="${data.simpleGoodsHashMap[key][2].goodsId}" width="160" height="160">
                    </a>
                    <div class="sp_name">
                        <a href="##">${data.simpleGoodsHashMap[key][2].goodsNm}</a>
                    </div>
                    <div class="sp_price">¥${data.simpleGoodsHashMap[key][2].haoPrc}</div>
                </div>
            </li>
            <li class="fore">
                <div class="sp_img">
                    <a href="##">
                        <img src="${data.simpleGoodsHashMap[key][3].imgUrl}" price="${data.simpleGoodsHashMap[key][3].haoPrc}" title="${data.simpleGoodsHashMap[key][3].goodsNm}" goodsId="${data.simpleGoodsHashMap[key][3].goodsId}" width="160" height="160">
                    </a>
                    <div class="sp_name">
                        <a href="##">${data.simpleGoodsHashMap[key][3].goodsNm}</a>
                    </div>
                    <div class="sp_price">¥${data.simpleGoodsHashMap[key][3].haoPrc}</div>
                </div>
            </li>
            <li class="fore">
                <div class="sp_img">
                    <a href="##">
                        <img src="${data.simpleGoodsHashMap[key][4].imgUrl}" price="${data.simpleGoodsHashMap[key][4].haoPrc}" title="${data.simpleGoodsHashMap[key][4].goodsNm}" goodsId="${data.simpleGoodsHashMap[key][4].goodsId}" width="160" height="160">
                    </a>
                    <div class="sp_name">
                        <a href="##">${data.simpleGoodsHashMap[key][4].goodsNm}</a>
                    </div>
                    <div class="sp_price">¥${data.simpleGoodsHashMap[key][4].haoPrc}</div>
                </div>
            </li>
            <li class="fore">
                <div class="sp_img">
                    <a href="##">
                        <img src="${data.simpleGoodsHashMap[key][5].imgUrl}" price="${data.simpleGoodsHashMap[key][5].haoPrc}" title="${data.simpleGoodsHashMap[key][5].goodsNm}" goodsId="${data.simpleGoodsHashMap[key][5].goodsId}" width="160" height="160">
                    </a>
                    <div class="sp_name">
                        <a href="##">${data.simpleGoodsHashMap[key][5].goodsNm}</a>
                    </div>
                    <div class="sp_price">¥${data.simpleGoodsHashMap[key][5].haoPrc}</div>
                </div>
            </li>
            <li class="fore">
                <div class="sp_img">
                    <a href="##">
                        <img src="${data.simpleGoodsHashMap[key][6].imgUrl}" price="${data.simpleGoodsHashMap[key][6].haoPrc}" title="${data.simpleGoodsHashMap[key][6].goodsNm}" goodsId="${data.simpleGoodsHashMap[key][6].goodsId}" width="160" height="160">
                    </a>
                    <div class="sp_name">
                        <a href="##">${data.simpleGoodsHashMap[key][6].goodsNm}</a>
                    </div>
                    <div class="sp_price">¥${data.simpleGoodsHashMap[key][6].haoPrc}</div>
                </div>
            </li>
            <li class="fore">
                <div class="sp_img">
                    <a href="##">
                        <img src="${data.simpleGoodsHashMap[key][7].imgUrl}" price="${data.simpleGoodsHashMap[key][7].haoPrc}" title="${data.simpleGoodsHashMap[key][7].goodsNm}" goodsId="${data.simpleGoodsHashMap[key][7].goodsId}" width="160" height="160">
                    </a>
                    <div class="sp_name">
                        <a href="##">${data.simpleGoodsHashMap[key][7].goodsNm}</a>
                    </div>
                    <div class="sp_price">¥${data.simpleGoodsHashMap[key][7].haoPrc}</div>
                </div>
            </li>
        </ul>`
        str3 += `<div class='tab_content_right'>${str2}</div>`
    }
    //拼接title和热门数据和除热门外的数据
    str = `<div class="title" style="border-bottom: 2px solid ${data.floorFontColor};">
            <h3 style="color:${data.floorFontColor}">
                <span style="background-color: ${data.floorFontColor}"></span>${data.floorTitle}
            </h3>
            <ul>
                <li class="active"><a href="##">热门</a></li>
                ${str1}
            </ul>
        </div>
        <div class="tab_content">
            <div class="tab_content_left">
                <a href="##">
                    <img class="" src="${data.hotList[0].imgUrl}" title="${data.hotList[0].linkTitle}" goodsId="${data.hotList[0].linkId}">
                </a>
            </div>
            <div class='tab_content_right' style="display:block;opacity:1">
                <div>
                    <ul class="hot">
                        <li class="fore1">
                            <a href="##">
                                <img src="${data.hotList[1].imgUrl}" title="${data.hotList[1].linkTitle}" goodsId="${data.hotList[1].linkId}" width="208" height="240">
                            </a>
                        </li>
                        <li class="fore2">
                            <a href="##">
                                <img class="lazy-image" src="${data.hotList[2].imgUrl}" title="${data.hotList[2].linkTitle}" goodsId="${data.hotList[2].linkId}"
                                    width="208" height="240">
                            </a>
                        </li>
                        <li class="fore3">
                            <a href="##">
                                <img class="" src="${data.hotList[3].imgUrl}" title="${data.hotList[3].linkTitle}" goodsId="${data.hotList[3].linkId}"
                                    width="208" height="238">
                            </a>
                        </li>
                        <li class="fore4">
                            <a href="##">
                                <img class="" src="${data.hotList[4].imgUrl}" title="${data.hotList[4].linkTitle}" goodsId="${data.hotList[4].linkId}"
                                    width="208" height="238">
                            </a>
                        </li>
                    </ul>
                    <div class="h482">
                        <a href="##">
                            <img class="" src="${data.hotList[5].imgUrl}" title="${data.hotList[5].linkTitle}" goodsId="${data.hotList[5].linkId}">
                        </a>
                    </div>
                    <ul class="hot w_227">
                        <li class="fore5">
                            <a href="##">
                                <img class="lazy-image" src="${data.hotList[6].imgUrl}" title="${data.hotList[6].linkTitle}" goodsId="${data.hotList[6].linkId}"
                                    width="226" height="240">
                            </a>
                        </li>
                        <li class="fore6">
                            <a href="##">
                                <img class="" src="${data.hotList[7].imgUrl}" title="${data.hotList[7].linkTitle}" goodsId="${data.hotList[7].linkId}"
                                    width="226" height="238"> 
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            ${str3}
        </div>`
        floor.html(str);
}