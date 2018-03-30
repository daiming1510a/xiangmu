const jwt = require('jsonwebtoken');
const http = require('http');
const querystring = require("querystring")
const fs = require('fs')
module.exports = function (app) {
    //商品列表的接口
    const options = {
    hostname: 'www.lb717.com',
    port: 80,
    path: '/mall/index/getGoodsChannel',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
};


app.post('/mall/index/getGoodsChannel',function(req,res){

    let data = '';
    let request = http.request(options,(response) =>{
        response.setEncoding('utf8');
        response.on('data', (chunk) => {
            // console.log(`响应主体: ${chunk}`);
            data+=chunk
        });
        response.on('end', () => {
            res.end(JSON.stringify(data))
            //console.log(data,'nnn')
        });
    })
    request.write(querystring.stringify(req.body))
    request.end()
})


//注册接口
app.post('/user/register',function(req,res){
    // console.log(req.body)
    let user = fs.readFileSync('user.json',{encoding:"utf-8"})
    user = JSON.parse(user)
    user.push(req.body)
    fs.writeFile('user.json',JSON.stringify(user),function(){
        res.end(JSON.stringify({
            'suceess':1,
            "info":"register suceess"
        }))
    })
})

//登录接口
app.post('/user/login',function(req,res){
    // console.log(req.body)
    let user = fs.readFileSync(__dirname+'/user.json',{encoding:"utf-8"})
    user = JSON.parse(user)
    let login = req.body
    let resInfo = {
        success:0,
        info:'用户名或密码错误',
        token:''
    }
    user.forEach(usr => {
        if(usr.username == login.username&&usr.password == login.password){
            resInfo.success=1;
            resInfo.info = 'login success'
        }
    });

    if(resInfo.success == 1){
        // resInfo.token = jwt.sign(login,'1511',{
        //     expiresIn:60
        // })
         resInfo.token = jwt.sign(login,'1511')
    }

    res.end(JSON.stringify(resInfo))
})

//添加购物车
app.post('/user/Cart/addCart',function(req,res){
    jwt.verify(req.body.token,'1511',(err,decoded)=>{
        if(err){
            // res.end(err)
            res.end(JSON.stringify({
                info:'登录过期，请重新登录',
                detail:err.TokenExpiredError
            }))
        }else{
           // console.log(decoded.username)
            let cartInfo = JSON.parse(fs.readFileSync(__dirname+'/cart_info.json',{encoding:'utf-8'}))
            if(cartInfo[decoded.username]){
                cartInfo[decoded.username].push(req.body.goods_info)
            }else{
                cartInfo[decoded.username] = [req.body.goods_info]
            }
           // console.log(cartInfo)
            fs.writeFile(__dirname+'/cart_info.json',JSON.stringify(cartInfo),function(){
                res.end('1')
            })
        }
    })
})
    //分类接口
app.get('/mobile/Category/categorySon', function (req, res) {
   // console.log(req.query)
//    let tbdata='https://h5api.m.tmall.com/h5/mtop.taobao.baichuan.smb.get/1.0/?jsv=2.4.3&appKey=12574478&t=1521635057605&sign=5156f1d95aceec5d71ad5fc7bb204222&api=mtop.taobao.baichuan.smb.get&v=1.0&type=originaljson&dataType=jsonp&timeout=10000'
})
}