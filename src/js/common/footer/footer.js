function Footer(container) {
    this.el = container;
}
Footer.Template = ` <div class="foot_service">
<ul>
    <li><i class="ser1"></i></li>
    <li><i class="ser2"></i></li>
    <li><i class="ser3"></i></li>
    <li><i class="ser4"></i></li>
    <li style="background:none;"><i class="ser5"></i></li>
</ul>
</div>
<div class="foot_infor">
<div class="infor_code">
    <span>
        <img src="../images/app_code (1).jpg">到客户端领取红包
    </span>
    <span class="ml40">
        <img src="../images/wechart_code.jpg">扫一扫关注微信
    </span>
</div>
<ul class="ml60">
    <li class="title">订购指南</li>
    <li><a target="_blank" href="##">新手帮助</a></li>
    <li><a target="_blank" href="##">注册协议</a></li>
    <li><a target="_blank" href="##">电子发票</a></li>
    <li><a target="_blank" href="##">售后服务</a></li>
</ul>
<ul class="ml60">
    <li class="title">支付方式</li>
    <li><a target="_blank" href="##">在线支付</a></li>
    <li><a target="_blank" href="##">货到付款</a></li>
    <li><a target="_blank" href="##">电话支付</a></li>
</ul>
<ul class="ml60">
    <li class="title">配送服务</li>
    <li><a target="_blank" href="##">自营商品配送</a></li>
    <li><a target="_blank" href="##">品牌商品配送</a></li>
    <li><a target="_blank" href="##">全球购商品配送</a></li>
</ul>
<ul class="ml60">
    <li class="title">顾客需知</li>
    <li><a target="_blank" href="">会员权益</a></li>
    <li><a target="_blank" href="">购物金规则</a></li>
    <li><a target="_blank" href="">优惠券规则</a></li>
    <li><a target="_blank" href="">税费规则</a>
    </li>
</ul>
<ul class="ml60">
    <li class="title">友情链接</li>
    <li><a target="_blank" href="##">江苏电视台</a></li>
    <li><a target="_blank" href="##">荔枝网</a></li>
    <li><a target="_blank" href="##">幸福蓝海</a></li>
</ul>
</div>
<div class="foot_bt">
<div class="links">
    <a href="##">关于好享购物</a> |
    <a href="##">商家入驻</a> |
    <a href="##">联系我们</a>
</div>
<div class="foot_bg_line"></div>
<div class="authentication">
    <a href="##"><img src="../images/link_yinlian.gif"></a>
    <a href="##"><img src="../images/zhifubao.gif"></a>
    <a href="##"><img src="../images/jingwei.gif"></a>
    <a href="##"><img src="../images/szfw_cert.gif"></a>
</div>
<div class="copyrights">
    <div class="copyrights_lf">
        <img width="136" height="50" src="../images/copyrights.jpg">
    </div>
    <div class="copyrights_rt">
        <strong>江苏省广播电视总台（集团）成员企业</strong>
        <p> Copyright©2009-2018好享购物Hao24.com版权所有 </p>
        <p> 客服热线：400-800-5678
            <a href="##">
                <i></i>苏公网安备 32010202010344号
            </a>
            <a target="_blank" href="##">苏ICP备08119934号</a>
        </p>
        <p>支持方正正版字体</p>
    </div>
</div>
<div style="margin:10px auto 18px auto;width:50px;height:65px">
    <a href="##">
        <img src="../images/ebsIcon.png" width="55" height="65">
    </a>    
</div>
</div>`
$.extend(Footer.prototype,{
    init:function(){
        this.createHeader();
    },
    createHeader:function(){
        this.content = $("<div></div>")
        this.content.html(Footer.Template);
        this.el.append(this.content);
    }
})