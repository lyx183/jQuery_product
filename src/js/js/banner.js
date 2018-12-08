function Banner() {
    this.ali = $(".banner>ul>li");
    this.banner = $(".banner");
    this.img = $(".banner>ul>li>img")
    this.dir = $(".dir>a");
    this.aBtn = $(".btn>a");
    this.iNow = 0;
    this.Next = 0;
    this.timer = null;
}
Banner.prototype = {
    init: function () {
        this.autoPlay();
        this.event();
    },
    event: function () {
        this.img.mouseover($.proxy(this.over, this));
        this.img.mouseout($.proxy(this.out, this));
        this.dir.eq(0).click($.proxy(this.prev, this));
        this.dir.eq(1).click($.proxy(this.next, this));
        this.aBtn.click($.proxy(this.toggles, this))
    },
    autoPlay: function () {
        this.timer = setInterval($.proxy(this.handlePlay, this), 3000)
    },
    handlePlay: function () {
        if (this.Next == this.ali.length - 1) {
            this.Next = 0;
        } else {
            this.Next++;
        }
        this.toImg();
    },
    toImg: function () {
        this.ali.eq(this.iNow).stop(true).fadeTo(1000, 0);
        this.ali.eq(this.Next).stop(true).fadeTo(1000, 1);
        this.iNow = this.Next;
        this.aBtn.eq(this.iNow).addClass("active").siblings().removeClass("active")
    },
    toggles: function () {
        $(this).addClass('active').siblings().removeClass("active");
        this.aBtn.eq($(this).index()).addClass("active").siblings().removeClass("active")
        this.Next = $(this).index();
        this.toImg();
    },
    out: function () {
        this.autoPlay();
    },
    over: function (e) {
        clearInterval(this.timer);
    },
    prev: function () {
        if (this.Next == 0) {
            this.Next = this.ali.length - 1
        } else {
            this.Next--;
        }
        this.toImg();
    },
    next: function () {
        if (this.Next == this.ali.length - 1) {
            this.Next = 0
        } else {
            this.Next++;
        }
        this.toImg();
    }
}
var banner = new Banner();
banner.init()