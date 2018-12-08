function Cartrender() {
    this.checkAll1 = $(".car_list_th>input");
    this.checkAll2 = $(".car_settle>ul>li:first>input");
    this.ul = $(".car_list_td");
    this.allprice = $(".allprice>h3>span");
    this.allnum = $(".allnum>font");
}
$.extend(Cartrender.prototype, {
    init: function () {
        this.toAjax();
        this.checkAll();
        this.invert();
        this.del();
        this.add();
        this.reduce();
        this.nums();
        this.allPrice();
        this.allNums();
    },
    toAjax: function () {
        new Promise(function (resolve, reject) {
            $.ajax({
                type: "get",
                url: "/cart/rendercart",
                data: {},
                success: function (data) {
                    var data = JSON.parse(data)
                    resolve(data);
                }
            })
        }).then(function (data) {
            var str = "";
            this.ul = $(".car_list_td");
            for(var i = 0;i<data.length;i++){
                str+=`<li data-id="${data[i].goodsId}">
                <div class="li_chk"><input type="checkbox" class="chk"></div>
                <div class="li_pic">
                    <a class="##"><img src="${data[i].pic}" alt=""></a>
                </div>
                <div class="li_tit">${data[i].title}</div>
                <div class="li_price">¥${data[i].price}</div>
                <div class="li_num">
                    <div>
                        <a class="minus" data-val="-">-</a>
                        <input class="num" value="${data[i].num}">
                        <a class="add" data-val="+">+</a>
                    </div>
                </div>
                <div class="li_priceSum">${(parseInt(data[i].price)*parseInt(data[i].num)).toFixed(1)}</div>
                <div class="li_07">
                    <a href="##" class="del">删除</a>
                    <a href="##">移到收藏</a>
                </div>
            </li>`
            }
            this.ul.html(str);
        })
    },
    //全选操作
    checkAll:function(){
        var _this = this;
        this.checkAll1.on("click",function(){
            //获取未来元素之选择框
            this.ocheck = $(".car_list_td>li>.li_chk>input");
            //如果全选按钮1选中，改变自身和全选按钮2以及每个选择框的背景图、及总价
            if($(this).prop("checked")){
                $(this).attr("style","background-position:-15px 0");
                _this.checkAll2.prop("checked",true);
                _this.checkAll2.attr("style","background-position:-15px 0");
                var s = 0;
                var n = 0;
                this.ocheck.each(function(){
                    s+=Number($(this).parent().parent().find(".li_priceSum").html())
                    n+=Number($(this).parent().parent().find(".li_num").children().find(".num").val())
                    $(this).parent().parent().css("background","#fff5f2")
                    $(this).prop("checked",true);
                    $(this).attr("style","background-position:-15px 0");
                })
                _this.allprice.html("￥"+s.toFixed(1))
                _this.allnum.html(n)
            //如果全选按钮2没选中
            }else{
                _this.checkAll2.prop("checked",false);
                $(this).removeAttr("style")
                _this.checkAll2.removeAttr("style")
                this.ocheck.each(function(){
                    $(this).parent().parent().css("background","#fff")
                    $(this).prop("checked",false);
                    $(this).removeAttr("style")
                })
                _this.allprice.html("￥0.0")
                _this.allnum.html(0)
            }
        })
        this.checkAll2.on("click",function(){
            //获取未来元素之选择框
            this.ocheck = $(".car_list_td>li>.li_chk>input");
             //如果全选按钮2选中，改变自身和全选按钮1以及每个选择框的背景图
            if($(this).prop("checked")){
                $(this).attr("style","background-position:-15px 0");
                _this.checkAll1.prop("checked",true);
                _this.checkAll1.attr("style","background-position:-15px 0");
                var s= 0;
                var n = 0;
                this.ocheck.each(function(){
                    s+=Number($(this).parent().parent().find(".li_priceSum").html())
                    n+=Number($(this).parent().parent().find(".li_num").children().find(".num").val())
                    $(this).parent().parent().css("background","#fff5f2")
                    $(this).prop("checked",true);
                    $(this).attr("style","background-position:-15px 0");
                })
                _this.allprice.html("￥"+s.toFixed(1))
                _this.allnum.html(n)
            //如果全选按钮2没选中
            }else{
                _this.checkAll1.prop("checked",false);
                $(this).removeAttr("style");
                _this.checkAll1.removeAttr("style");
                this.ocheck.each(function(){
                    $(this).parent().parent().css("background","#fff")
                    $(this).prop("checked",false);
                    $(this).removeAttr("style")
                })
                _this.allprice.html("￥0.0")
                _this.allnum.html(0)
            }
        })
    },
    //反选
    invert:function(){
        var _this = this;
        this.ul.on("click",".li_chk>input",function(){
            this.ocheck = $(".li_chk>input");
            var bStop = true;
            this.ocheck.each(function(i,val){
                if(!$(this).prop("checked")){
                    $(this).parent().parent().css("background","#fff")
                    $(this).removeAttr("style");
                    bStop = false;
                }else{
                    $(this).parent().parent().css("background","#fff5f2")
                    $(this).attr("style","background-position:-15px 0");
                }
            })
            if(bStop){
                _this.checkAll1.prop("checked",true);
                _this.checkAll2.prop("checked",true);
                _this.checkAll1.attr("style","background-position:-15px 0");
                _this.checkAll2.attr("style","background-position:-15px 0");
            }else{
                _this.checkAll1.prop("checked",false);
                _this.checkAll2.prop("checked",false);
                _this.checkAll1.removeAttr("style");
                _this.checkAll2.removeAttr("style");
            }
        })
    },
    //删除商品
    del:function(){
        this.ul.on("click",".del",function(){
            this.goodsId = $(this).parent().parent().attr("data-id")
            // $(this).parent().parent().remove()
            $.ajax({
                type: "get",
                url: "/cart/goodsDel",
                data: {
                    goodsId:this.goodsId
                },
                success: function (data) {
                    if(data.status == 1){
                        alert(data.info);
                    }
                }
            })
        })
    },
    //增加商品
    add:function(){
        this.ul.on("click",".add",function(){
            this.goodsId = $(this).parent().parent().parent().attr("data-id")
            $.ajax({
                type: "get",
                url: "/cart/goodsAdd",
                data: {
                    goodsId:this.goodsId
                },
                success: function (data) {}
            })
        })
    },
    //减少商品
    reduce:function(){
        this.ul.on("click",".minus",function(){
            this.goodsId = $(this).parent().parent().parent().attr("data-id")
            console.log(this)
            $.ajax({
                type: "get",
                url: "/cart/goodsMinus",
                data: {
                    goodsId:this.goodsId
                },
                success: function (data) {}
            })
        })
    },
    //改变输入框商品的数量
    nums:function(){
        this.ul.on("blur",".num",function(){
            this.goodsId = $(this).parent().parent().parent().attr("data-id")
            var n = $(this).val();
            $(this).attr("value",n)
            $.ajax({
                type: "get",
                url: "/cart/goodsNums",
                data: {
                    goodsId:this.goodsId,
                    num:n
                },
                success: function (data) {}
            })
        })
    },
    //总价改变
    allPrice:function(){
        var _this = this;
        this.ul.on("click",".li_chk>input",function(){
            this.ocheck = $(".li_chk>input");
            var s = 0;
            this.ocheck.each(function(i,val){
                if($(this).prop("checked")){
                    s+=Number($(this).parent().parent().find(".li_priceSum").html())
                }
            })
            _this.allprice.html("￥"+s.toFixed(1))
        })
    },
    //总数量改变
    allNums:function(){
        var _this = this;
        this.ul.on("click",".li_chk>input",function(){
            this.ocheck = $(".li_chk>input");
            var n = 0;
            this.ocheck.each(function(i,val){
                if($(this).prop("checked")){
                    n+=Number($(this).parent().parent().find(".li_num").children().find(".num").val())
                }
            })
            _this.allnum.html(n)
        })
    }
})
new Cartrender().init();