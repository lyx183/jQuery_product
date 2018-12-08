function Page(){
    this.el = $(".header");
}

$.extend(Page.prototype,{
    init:function(){
        this.header = new Header(this.el).init();
        // this.login = new Login(this.el).init();
        // this.register = new Register(this.el).init();
    }
})
new Page().init();