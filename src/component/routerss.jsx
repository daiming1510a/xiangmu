import React,{Component} from 'react'
import {Route,Redirect} from 'react-router-dom'
import {getCookie} from '../utils/utils'
function isLogin(){
    return !!getCookie('token')//有值返回true，没有值返回false
    // if(!getCookie('token')){//获取token,是登录状态
    //     return false
    // }else{
    //     return true
    // }
}
class Routerss extends Component{
    render(){
        const {routes}=this.props
        return (
               routes.map((route,index)=>{
                        //    console.log(route)在这里进行<route.component><route.component>这是各个组件，在各个组件（相当于子组件）进行调用这个Routerss组件（在这里相当于父组件，在各个组件进行调用时就是字组件了），把参数传下去，就会有this.props进行接收参数
                            return <Route exact={route.exact} key={index} path={route.path} render={(router)=>{
                               // console.log(route,'mmm')
                               console.log(route.authorization)
                                if(route.authorization){//如果为true，则需要权限，需要登录，现在就要判断是否是登录状态，获取token
                                   if(!isLogin()){
                                        return <Redirect to={{pathname:"/login",state:{from:route.path}}}></Redirect>
                                   }
                                  
                                }
                                return <route.component {...router} routes={route.children}></route.component>
                            }}></Route>
                })
        )
    }
}
export default Routerss