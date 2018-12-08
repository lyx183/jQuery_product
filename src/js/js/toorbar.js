function Toorbar(){
    this.div = $(".toorbar_tabs>div");
    this.em = $(".toorbar_tabs>div>a>em")
    this.totop = $(".toolbar-footer>.toolbar-tab")
}
$.extend(Toorbar.prototype,{
    init:function(){
        this.divover();
        this.divout();
        this.totopover();
        this.totopout();
        this.totopclick();
    },
    divover:function(){
        var _this = this;
        this.div.mouseover(function(){
            $(this).addClass("tbar-tab-select").siblings().removeClass("tbar-tab-select");
            _this.em.eq($(this).index()).addClass("tbar-tab-hover");
        })
    },
    divout:function(){
        var _this = this;
        this.div.mouseout(function () {
            $(this).removeClass("tbar-tab-select");
            _this.em.eq($(this).index()).removeClass("tbar-tab-hover");
        })
    },
    totopover:function(){
        this.totop.mouseover(function(){
            $(this).addClass("tbar-tab-select");
        })
    },
    totopout:function(){
        this.totop.mouseout(function(){
            $(this).removeClass("tbar-tab-select");
        })
    },
    totopclick:function(){
        this.totop.click(function(){
            $(document).scrollTop(0)
        })
    }
})
new Toorbar().init();