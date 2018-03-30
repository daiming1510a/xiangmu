//同源策略: 1.协议相同 2.域名相同3.端口号相同
let domin
if (process.env == 'development') {//属于开发环境时
    domin = 'http://localhost:9000'//本地测试服务器的域名 
}
if (process.env == 'production') {//当是线上环境时，就要真实的域名,吧域名往下进行拼接在url前面
    domin = 'http://www.lb717.com'
}

let $http = {
    get(url, data) {
        if (Object.prototype.toString.call(data) != '[object Object]') {
            return {
                then(callback) {
                    callback('GETt请求入参格式不正确，需要传object')
                    return {
                        catch(err) {
                            err(new Error("入参格式不对"))
                        }
                    }
                }
            }
        }
        let queryString = "?"
        for (let i in data) {
            queryString += (i + "=" + data[i] + "&")
        }
        url = encodeURI(url + queryString.slice(0, -1));

        return fetch(domin + url, {
            headers: {
                "Content-Type": 'application/json;charset=utf-8'
            }
        }).then(res => res.json())
    },
    post(url, data) {
        if (Object.prototype.toString.call(data) != '[object Object]') {
            return {
                then(callback) {
                    callback('GETt请求入参格式不正确，需要传object')
                    return {
                        catch(err) {
                            err(new Error("入参格式不对"))
                        }
                    }
                }
            }
        }
        return fetch(domin + url, {
            "body": JSON.stringify(data),
            "headers": {
                "Content-Type": 'application/json;charset=utf-8',
                "Token": '123213s'
            },
            "method": "POST"
        }).then(res => res.json())
    },
    jsonp(url, callbackName) {
        return new Promise((resolve, reject) => {
            window[callbackName] = function (data) {
                resolve(data)
            }
            let script = document.createElement('script');
            let body = document.body;
            script.src = url
            body.appendChild(script)
        })
    }
}
export default $http
// //基于fetch封装的请求方法，支持get和post
// let $http={
//     get(url,data){
//         if(Object.prototype.toString.call(data)!='[object Object]'){
//             // console.error('你的get请求入参不正确，需要传object')
//             // throw new Error('入参格式错误')
//             return {
//                 then(callback){
//                     callback('你的get请求入参不正确，需要传object')
//                     return {
//                         catch(err){
//                             err(new Error('入参格式错误'))
//                         }
//                     }
//                 }
//             }
//         }
//         let queryStirng='?'
//         for(let i in data){
//             queryStirng+=(i+'='+data[i]+'&')
//         }
//         // queryStirng=queryStirng.slice(0,-1)
//         // console.log(queryStirng)
//         url=encodeURI(url+queryStirng.slice(0,-1))
//         return fetch(url,{
//             headers:{
//                 'content-type':'application/json;charset=utf-8'
//             }
//         }).then(res=>{res.json()})
//     },
//     post(url,data){
//            if(Object.prototype.toString.call(data)!='[object Object]'){
//             // console.error('你的get请求入参不正确，需要传object')
//             // throw new Error('入参格式错误')
//             return {
//                 then(callback){
//                     callback('你的get请求入参不正确，需要传object')
//                     return {
//                         catch(err){
//                             err(new Error('入参格式错误'))
//                         }
//                     }
//                 }
//             }
//         }
//         return fetch(url,{
//             "body":JSON.stringify(data),
//             "Content-Type":'application/json;charset=utf-8',
//             "method":"POST"
//         }).then(res=>{res.json()})
//     }
// }

// export default $http