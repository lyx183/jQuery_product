function Login(){
    this.input_name = $(".input_name>input");
    this.input_pass = $(".input_pass>input");
    this.btn_login = $(".btn_login");
}
$.extend(Login.prototype,{
    init:function(){
        this.reqjson();
    },
    reqjson:function(){
        var _this = this;
        this.btn_login.on("click",function(){
            new Promise(function(resolve, reject){
                $.ajax({
                    type: "get",
                    url: "/cart/login",
                    data: {
                        account:_this.input_name.val(),
                        password:_this.input_pass.val()
                    },
                    success: function (data) {
                        resolve(data);
                    }
                })
            }).then(function (data){
                this.msg_icon = $(".msg_wrap>b");
                this.msg_tips = $(".msg_wrap>span");
                if(data.status == 0){
                    this.msg_icon.css("background-position","-26px -29px")
                    this.msg_tips.html(data.info)
                }else if(data.status == 1){
                    this.msg_icon.css("background-position","-158px -20px")
                    this.msg_tips.html(data.info+"~~~正在跳转...")
                    setTimeout(function(){
                        location.href="index.html";
                    },3000)

                }else if(data.status == 2){
                    this.msg_icon.css("background-position","-26px -29px")
                    this.msg_tips.html(data.info)
                }
            })
        })
    }
})
new Login().init();