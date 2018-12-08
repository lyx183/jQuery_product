//从localStorage获取数据并动态渲染
function Detialrender(){
    this.urlId = location.href.split("?")[1].split("=")[1];
    this.obj = JSON.parse(localStorage.getItem(this.urlId));
    this.small_pic = $(".detail_zoom .small img:first")
    this.middle_pic = $(".detail_zoom .middle img")
    this.large_pic = $(".detail_zoom .large img")
    this.title = $(".detail_info_tit>h1")
    this.advert = $(".detail_info_tit>div")
    this.price = $(".sales_price>strong");
}
$.extend(Detialrender.prototype,{
    init:function(){
        this.settext();
        this.setpic();
    },
    settext:function(){
        this.title.html(this.obj.title)
        this.advert.html(this.obj.title)
        this.price.html(this.obj.price)
    },
    setpic:function(){
        this.small_pic.attr("src",this.obj.src)
        this.middle_pic.attr("src",this.obj.src)
        this.large_pic.attr({
            "src":this.obj.src,
            "width":550,
            "height":550
        })
    }
})
new Detialrender().init();

//放大镜构造函数
function Magnifier(options){
    this.oMiddle = $(options.middle);
    this.oSmall = $(options.small);
    this.oLarge = $(options.large);
    this.oFilter = $(options.filter);
    this.oMiddle_pic = $(options.middle_pic);
    this.oSmall_pic = $(options.small_pic);
    this.oLarge_pic = $(options.large_pic);
}
$.extend(Magnifier.prototype,{
    init:function(){
        this.oSmallover();
        this.oMiddleover();
    },
    //移入小图，中图对应变化（选项卡）
    oSmallover:function(){
        var _this = this;
        this.oSmall_pic.mouseover(function(){
            _this.oMiddle_pic.attr("src",$(this).attr("src"))
            _this.oLarge_pic.attr("src",$(this).attr("src"))
        });
    },
    oMiddleover:function(){
        this.oMiddle.mouseover($.proxy(this.middleover,this))
        this.oMiddle.mouseout($.proxy(this.middleout,this))
        this.oMiddle.mousemove($.proxy(this.middlemove,this))
    },
    middleover:function(){
        this.oLarge.css("display","block");
        this.oFilter.css("display","block");
    },
    middleout:function(){
        this.oLarge.css("display","none");
        this.oFilter.css("display","none");
    },
    middlemove:function(e){
        var iWidth = this.oMiddle.outerWidth()-this.oFilter.outerWidth();
        var iHeight = this.oMiddle.outerHeight()-this.oFilter.outerHeight();

        var l = e.pageX -this.oMiddle.offset().left- this.oFilter.outerWidth()/2
        var t = e.pageY -this.oMiddle.offset().top- this.oFilter.outerHeight()/2;

        l = l>iWidth?iWidth:(l<0?0:l);
        t = t>iHeight?iHeight:(t<0?0:t);
        
        this.oFilter.css({
            "left":l,
            "top":t
        }); 
        this.oLarge_pic.css({
            "left":-l,
            "top":-t
        })
    }

})
//实例化放大镜
new Magnifier({
    middle:".detail_zoom .middle",
    small:".detail_zoom .small",
    large:".detail_zoom .large",
    filter:".detail_zoom .filter",
    middle_pic:".detail_zoom .middle img",
    small_pic:".detail_zoom .small img",
    large_pic:".detail_zoom .large img"
}).init();

//加入购物车
function AddtoCart(){
    this.ad_car = $(".ad_car");
    this.ad_num = $(".ad_num>.num");
}
$.extend(AddtoCart.prototype,{
    init:function(){
        this.addtocart();
        this.goodsreduce();
        this.goodsadd();
    },
    addtocart:function(){
        this.ad_car.on("click","button",function(){
            this.urlId = location.href.split("?")[1].split("=")[1];
            this.obj = JSON.parse(localStorage.getItem(this.urlId));
            this.titles = $(".detail_info_tit>h1");
            this.price = $(".sales_price>strong");
            this.pic = $(".detail_zoom .small img:first");
            this.num = $(".ad_num>.num>input");
            $.ajax({
                type: "get",
                url: "/cart/addtocart",
                data: {
                    title:this.titles.html(),
                    price:this.price.html(),
                    pic:this.pic.attr("src"),
                    goodsId:this.obj.goodsId,
                    num:this.num.val(),
                },
                success: function (data) {
                    if(data.status == 1){
                        alert(data.info);
                    }
                }
            })
        })
    },
    goodsreduce:function(){
        this.ad_num.on("click","a:first",function(){
            this.num = $(".ad_num>.num>input");
            var n = this.num.val();
            if(n>1){
                n--
            }
            this.num.val(n);
        })
    },
    goodsadd:function(){
        this.ad_num.on("click","a:last",function(){
            this.num = $(".ad_num>.num>input");
            var n = this.num.val();
            n++
            this.num.val(n);
        })
    }
})
new AddtoCart().init();