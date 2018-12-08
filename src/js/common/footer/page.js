function Page(){
    this.el = $(".footer");
    this.bar = $(".slidebar")
}

$.extend(Page.prototype,{
    init:function(){
        this.footer = new Footer(this.el).init();
        this.slidebar = new Slidebar(this.bar).init();
    }
})
new Page().init();