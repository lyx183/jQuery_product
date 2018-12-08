const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req,res)=>{
    const {query,pathname} = url.parse(req.url,true)
    if(pathname == "/cart/addtocart"){
        fs.readFile("../../json/cart.json",(err,data)=>{
            var str = data+"";
            if(str){
                let data = JSON.parse(str);
                let bStop = true;
                for(let key in data){
                    if(data[key].goodsId == query.goodsId){
                        data[key].num = parseInt(data[key].num)+parseInt(query.num);
                        fs.writeFile("../../json/cart.json",JSON.stringify(data),(err)=>{})
                        bStop = false;
                        res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                        let obj = {info:"成功添加至购物车",status:1}
                        res.end(JSON.stringify(obj));
                    }
                }
                if(bStop){
                    data.push(query);
                    fs.writeFile("../../json/cart.json",JSON.stringify(data),(err)=>{})
                    res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                    let obj = {info:"成功添加至购物车",status:1}
                    res.end(JSON.stringify(obj));
                }
            }else{
                var arr = [];
                arr.push(query);
                fs.writeFile("../../json/cart.json",JSON.stringify(arr),(err)=>{});
                let obj = {info:"成功添加至购物车",status:1}
                res.end(JSON.stringify(obj));
            }
        })
    }else if(pathname == "/cart/rendercart"){
        fs.readFile("../../json/cart.json",(err,data)=>{
            res.writeHead(200,{"content-type":"application/json;charset=utf8"});
			res.end(JSON.stringify(data+""))
        })
    }else if(pathname == "/cart/goodsDel"){
        fs.readFile("../../json/cart.json",(err,data)=>{
            var arr=JSON.parse(data+"");
            for(var i in arr){
				if(arr[i].goodsId==query.goodsId){
					arr.splice(i,1);
				}
			}
            fs.writeFile("../../json/cart.json",JSON.stringify(arr),(err)=>{});
            res.writeHead(200,{"content-type":"application/json;charset=utf8"});
            let obj = {info:"成功从购物车中删除",status:1}
            res.end(JSON.stringify(obj));
        })
    }else if(pathname == "/cart/goodsAdd"){
        fs.readFile("../../json/cart.json",(err,data)=>{
            var arr=JSON.parse(data+"");
            for(var i in arr){
				if(arr[i].goodsId==query.goodsId){
					arr[i].num=Number(arr[i].num)+1
				}
			}
            fs.writeFile("../../json/cart.json",JSON.stringify(arr),(err)=>{});
        })
    }else if(pathname == "/cart/goodsMinus"){
        fs.readFile("../../json/cart.json",(err,data)=>{
            var arr=JSON.parse(data+"");
            for(var i in arr){
				if(arr[i].goodsId==query.goodsId){
					arr[i].num=Number(arr[i].num)-1
				}
			}
            fs.writeFile("../../json/cart.json",JSON.stringify(arr),(err)=>{});
        })
    }else if(pathname == "/cart/goodsNums"){
        fs.readFile("../../json/cart.json",(err,data)=>{
            var arr=JSON.parse(data+"");
            for(var i in arr){
				if(arr[i].goodsId==query.goodsId){
					arr[i].num=query.num;
				}
			}
            fs.writeFile("../../json/cart.json",JSON.stringify(arr),(err)=>{});
        })
    }else if(pathname == "/cart/register"){
        fs.readFile("../../json/login.json",(err,data)=>{
            var str = data+"";
            if(str){
                let data = JSON.parse(str);
                let bStop = true;
                for(let key in data){
                    if(data[key].account == query.account){
                        bStop = false;
                        res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                        let obj = {info:"此账号已存在",status:1}
                        res.end(JSON.stringify(obj));
                    }
                }
                if(bStop){
                    data.push(query);
                    fs.writeFile("../../json/login.json",JSON.stringify(data),(err)=>{})
                    res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                    let obj = {info:"注册成功，赶快去登录吧",status:1}
                    res.end(JSON.stringify(obj));
                }
            }else{
                var arr = [];
                arr.push(query);
                fs.writeFile("../../json/login.json",JSON.stringify(arr),(err)=>{});
                let obj = {info:"注册成功，赶快去登录吧",status:1}
                res.end(JSON.stringify(obj));
            }
        })
    }else if(pathname == "/cart/login"){
        fs.readFile("../../json/login.json",(err,data)=>{
            var str = data+"";
            if(str){
                let data = JSON.parse(str);
                let bStop = true;
                for(let key in data){
                    if(data[key].account == query.account){
                        bStop = false;
                        if(data[key].password == query.password){
                            res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                            let obj = {info:"登录成功",status:1}
                            res.end(JSON.stringify(obj));
                        }else{
                            res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                            let obj = {info:"密码输入错误，请重新输入",status:2}
                            res.end(JSON.stringify(obj));
                        }
                        
                    }
                }
                if(bStop){
                    res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                    let obj = {info:"此账号不存在，去注册吧",status:0}
                    res.end(JSON.stringify(obj));
                }
            }else{
                res.writeHead(200,{"content-type":"application/json;charset=utf8"});
                let obj = {info:"此账号不存在，去注册吧",status:0}
                res.end(JSON.stringify(obj));
            }
            
        })
    }
}).listen(9000)
console.log("服务器已开启，请访问localhost:9000")