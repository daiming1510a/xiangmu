
const express = require('express')
const bodyParser = require('body-parser')
//const jwt = require('jsonwebtoken');

const app = express()
const api=require('./api')
app.use(bodyParser.json())

//设置跨域 cors
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:3000") //跨域
    res.header('Access-Control-Allow-Headers',"Content-type,Token") //字段
    res.header("Content-Type","application/json;charset=utf-8") //响应限制放回json
    next()
})
api(app)//启动后端接口

// //商品列表的接口

// const options = {
//     hostname: 'www.lb717.com',
//     port: 80,
//     path: '/mall/index/getGoodsChannel',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//     }
// };

// const http = require('http')
// const querystring = require("querystring")
// app.post('/mall/index/getGoodsChannel',function(req,res){

//     let data = '';
//     let request = http.request(options,(response) =>{
//         response.setEncoding('utf8');
//         response.on('data', (chunk) => {
//             // console.log(`响应主体: ${chunk}`);
//             data+=chunk
//         });
//         response.on('end', () => {
//             res.end(JSON.stringify(data))
//         });
//     })
//     request.write(querystring.stringify(req.body))
//     request.end()
// })

// const fs = require('fs')

// //注册接口
// app.post('/user/register',function(req,res){
//     // console.log(req.body)
//     let user = fs.readFileSync('user.json',{encoding:"utf-8"})
//     user = JSON.parse(user)
//     user.push(req.body)
//     fs.writeFile('user.json',JSON.stringify(user),function(){
//         res.end(JSON.stringify({
//             'suceess':1,
//             "info":"register suceess"
//         }))
//     })
// })

// //登录接口
// app.post('/user/login',function(req,res){
//     // console.log(req.body)
//     let user = fs.readFileSync(__dirname+'/user.json',{encoding:"utf-8"})
//     user = JSON.parse(user)
//     let login = req.body
//     let resInfo = {
//         success:0,
//         info:'用户名或密码错误',
//         token:''
//     }
//     user.forEach(usr => {
//         if(usr.username == login.username&&usr.password == login.password){
//             resInfo.success=1;
//             resInfo.info = 'login success'
//         }
//     });

//     if(resInfo.success == 1){
//         resInfo.token = jwt.sign(login,'1511',{
//             expiresIn:60
//         })
//     }

//     res.end(JSON.stringify(resInfo))
// })

// //添加购物车
// app.post('/user/Cart/addCart',function(req,res){
//     jwt.verify(req.body.token,'1511',(err,decoded)=>{
//         if(err){
//             // res.end(err)
//             res.end(JSON.stringify({
//                 info:'登录过期，请重新登录',
//                 detail:err.TokenExpiredError
//             }))
//         }else{
//             console.log(decoded.username)
//             let cartInfo = JSON.parse(fs.readFileSync(__dirname+'/cart_info.json',{encoding:'utf-8'}))
//             if(cartInfo[decoded.username]){
//                 cartInfo[decoded.username].push(req.body.goods_info)
//             }else{
//                 cartInfo[decoded.username] = [req.body.goods_info]
//             }
//             console.log(cartInfo)
//             fs.writeFile(__dirname+'/cart_info.json',JSON.stringify(cartInfo),function(){
//                 res.end('1')
//             })
//         }
//     })
// })
// //分类接口
// app.get('/mobile/Category/categorySon',function(req,res){
//     console.log(req.query)
//     http.request({},function(){

//     })
//     res.json(1)
// })
app.listen(9000,function(){
    console.log('server listen 9000')
})




// const express=require('express')//静态服务器
// const bodyParser=require('body-parser')//使用post进行传参，解析参数就使用这个中间件,拿到请求时body的数据，请求时boay必须是JSON.stringify()转的   "body":JSON.stringify(data),
// const jwt=require('jsonwebtoken')//这个是进行加密的
// const app=express()

// app.use(bodyParser.json())
// app.all('*',function(req,res,next){//任意的请求，*任意值，任意路径都经过这一步
//     // res.header('Access-Control-Allow-Origin','*')//进行跨域，*任意域名*=>localhost:3000(这是只有localhost：3000才可以跨域)
//     res.header('Access-Control-Allow-Origin','http://localhost:3000')//只支持3000端口进行跨域
//     res.header('Access-Control-Allow-Headers','Content-Type,Token')//允许请求头字段，请求头里面有content-type字段,里面还设有token字段，这是在做登录注册时，来做数据的加密或解密（存在秘钥里面，秘钥存在于token'字段里面）
//     // res.header('Content-Type','application/json；text/html;charset=utf-8')//相应的内容是啥，这是json类型,也可以是html类型
//     res.header('Content-Type','application/json;charset=utf-8')
//     next()//中间层，就会来到下面的app.post 
// })
// //商品列表的借口

// const options={//请求信息    向远端进行请求数据，是需要带参数的
//     hostname:'www.lb717.com',//域名
//     port:80,
//     path:'/mall/index/getGoodsChannel',
//     method:'POST',
//     headers:{
//         "Content-Type":'application/x-www-form-urlencoded;charset=utf-8'
//     }
// }


// const http=require('http');
// const querystring=require('querystring')
// app.post('/mall/index/getGoodsChannel',function(req,res){
//     //console.log(JSON.stringify(req.body))

//     let data='';//这是在做请求数据
//     let request=http.request(options,(response)=>{
//         response.setEncoding('utf8');
//         response.on('data', (chunk) => {
//            // console.log(`响应主体: ${chunk}`);
//             data+=chunk;
//         });
//         response.on('end', () => {//请求结束
//             //console.log(data);
//             res.end(JSON.stringify(data))
//         });
//     })
//     request.write(querystring.stringify(req.body))//传参数
//     request.end()


//     // res.end(JSON.stringify({
//     //     "code":1
//     // }))
// })


// const fs=require('fs')
// const path=require("path");
// //注册接口
// app.post('/user/register',function(req,res){
//     //console.log(JSON.stringify(req.body))//在这里吧数据存在一个地方对
//    let user= fs.readFileSync(path.join(__dirname,'user.json'),{encoding:'utf-8'})//先进行读取文件
//    user=JSON.parse(user)
//    user.push(req.body)
//    fs.writeFile(path.join(__dirname,'user.json'),JSON.stringify(user),function(){//吧数据进行写进文件里，因为是异步所以有回调函数，在回调函数里面进行向前台返回成功信息
//         res.end(JSON.stringify({
//             "success":1,//返回这个字段说明你是注册成功的
//             "info":"register success"
//         }))
//    })

//     console.log(user)

// })

// //登录的接口
// app.post('/user/login',function(req,res){
//     //点击登录进行判断数据是否已经存在，如果已经存在就要登录成功，返回秘钥，前端拿着这个秘钥进行登录成功进行往下的操作
//     let user= fs.readFileSync(path.join(__dirname,'user.json'),{encoding:'utf-8'})
//     user=JSON.parse(user)
//     let login=req.body//传过来的登录的用户名或密码
//     console.log(login)
//     let resInfo={
//         success:0,
//         info:'用户名或密码错误',
//         token:''
//         //秘钥，返回给前端
//     }
//     user.forEach(usr=>{
//         if(usr.username==login.username&&usr.password==login.password){
//             resInfo.success=1,
//             resInfo.info='login success'
//         }
//     });

//     if(resInfo.success==1){ 
//         resInfo.token=jwt.sign(login,'1233')
//         //sign两个参数，第一个是要加密的内容，第二个是秘钥
//     }
//     res.end(JSON.stringify(resInfo))//把加密后的内容进行返回
// })


// //添加购物车

// app.post('/user/Cart/addCart',function(req,res){
//     //console.log(req.body)
//    jwt.verify(req.body.token,'1511',(err,decoded)=>{
//        console.log(err)
//        console.log(decoded,'www')
//    })
//    res.end()
// })
// app.listen(9000,function(){//进行启动，端口号不能一样，会被顶掉。但是9000又涉及到跨域问题
//     console.log('server listen 9000')
// })