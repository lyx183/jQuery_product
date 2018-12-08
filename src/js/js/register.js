function Register(){
    this.account = $(".item_account>input");
    this.password = $(".item_password>input");
    this.btn_regist = $(".btn_regist")
}
$.extend(Register.prototype,{
    init:function(){
        this.tojson();
    },
    tojson:function(){
        var _this = this;
        this.btn_regist.on("click",function(){
            new Promise(function(resolve, reject){
                $.ajax({
                    type: "get",
                    url: "/cart/register",
                    data: {
                        account:_this.account.val(),
                        password:_this.password.val()
                    },
                    success: function (data) {
                        resolve(data);
                    }
                })
            }).then(function (data){
                if(data.status == 1){
                    alert(data.info);
                }
            })
        })
    }
})
new Register().init();