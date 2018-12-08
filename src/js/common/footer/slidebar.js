function Slidebar(container){
    this.el = container;
}
Slidebar.Template = `<div class="toolbarWarp">
<div class="toolbar">
    <div class="toorbar_tabs">
        <div class="tbar-tab-my">
            <a href="##">
                <i class="tab-ico"></i>
                <em>我的hao24</em>
            </a>
        </div>
        <div class="tbar-tab-cart">
            <a href="cart.html">
                <i class="tab-ico"></i>
                <em>购物车</em>
            </a>
        </div>
        <div class="tbar-tab-fav">
            <a href="##">
                <i class="tab-ico"></i>
                <em>我的收藏</em>
            </a>
        </div>
        <div class="tbar-tab-phone">
            <a href="##">
                <i class="tab-ico"></i>
                <em class="tab-phone"><img src="../images/app_code.jpg"></em>
            </a>
        </div>
        <div class="tbar-tab-sevice">
            <a href="##">
                <i class="tab-ico"></i>
                <em>联系在线客服</em>
            </a>
        </div>
    </div>
    <div class="toolbar-footer">
        <div class="toolbar-tab">
            <a href="##"> 
                <i class="tab-ico"></i>
            </a>
        </div>
    </div>
</div>
</div>`
$.extend(Slidebar.prototype,{
    init:function(){
        this.createrslidebar();
    },
    createrslidebar:function(){
        this.content = $("<div></div>")
        this.content.html(Slidebar.Template);
        this.el.append(this.content);
    }
})