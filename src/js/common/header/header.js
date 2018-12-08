function Header(container){
    this.el = container;
}

Header.Template = ` <div class="box_topWarp">
<div class="box_top w1190">
    <div class="top_left left">订购热线：400-800-5678</div>
    <ul class="top_right right">
        <li class="welcome">欢迎来到好享购物</li>
        <li class="line">|</li>
        <li><a href="login.html">登录</a></li>
        <li class="line">|</li>
        <li><a href="register.html">注册</a></li>
        <li class="line">|</li>
        <li><a href="##" target="_blank">我的订单</a></li>
        <li class="line">|</li>
        <li class="top_my">
            <a href="##" target="_blank">我的hao24</a>
            <ul>
                <li><a href="##" target="_blank">我的购物金</a></li>
                <li><a href="##" target="_blank">我的优惠券</a></li>
                <li><a href="##" target="_blank">我的积分卡</a></li>
                <li><a href="##" target="_blank">我的暂存款</a></li>
            </ul>
        </li>
        <li class="line">|</li>
        <li><a href="#" target="_blank">企业采购</a></li>
        <li class="line">|</li>
        <li class="top_phone">
            <a href="##"><i class="phone_icon"></i>手机购物</a>
            <ul>
                <li class="app_img"><img src="../images/app_code.jpg"></li>
                <li>扫一扫，下载客户端</li>
            </ul>
        </li>
        <li class="line">|</li>
        <li><a href="##" target="_blank">客服中心</a></li>
    </ul>
</div>
</div>
<div class="box_middleWarp">
<div class="box_middle w1190">
    <h1 class="logo">
        <a href="##">
            <img src="../images/logo.jpg" title="好享购物官网">
        </a>
    </h1>
    <div class="activity">
        <a href="##">
            <img src="../images/activity.jpg" title="双节大庆  金喜来">
        </a>
    </div>
    <div class="search">
        <input type="text" class="keyword" placeholder="请输入关键字">
        <input type="button" class="btn" value="搜索">
        <div class="hotsearch">
            <ul class="hotsearch">
                <li><a href="##">羽绒服</a></li>
                <li><a href="##">莱克</a></li>
                <li><a href="##">收纳用品</a></li>
                <li><a href="##">小熊电热饭盒</a></li>
                <li><a href="##">吉优百换鞋收纳凳</a></li>
                <li><a href="##">面膜</a></li>
                <li><a href="##">乳胶床垫</a></li>
            </ul>
        </div>
    </div>
    <div class="cart_box">
        <div class="cart">
            <i class="ic_left"></i>
            <a href="cart.html" target="_blank">我的购物车</a>
            <i class="ic_count">0</i>
            <i class="ic_right"></i>
        </div>
    </div>
</div>
</div>
<div class="navWarp">
<div class="nav w1190">
    <ul>
        <li class="all_cate">
            <a href="##">全部类目</a>
            <ul></ul>
        </li>
        <li><a href="index.html">首页</a></li>
        <li><a href="##">直播</a></li>
        <li><a href="##">全球购</a></li>
        <li><a href="##">品牌馆</a></li>
        <li><a href="##">特惠活动</a></li>
        <li><a href="##">抢红包</a></li>
    </ul>
</div>
</div>`

$.extend(Header.prototype,{
    init:function(){
        this.createHeader();
    },
    createHeader:function(){
        this.content = $("<div></div>");
        this.content.html(Header.Template);
        this.el.append(this.content);
    }
})