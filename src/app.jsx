import React,{Component} from "react"


import Routes from "./router"//在这里进行引入数据


import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"


import Routerss from './component/routerss.jsx'//把公共组件进行引入

class App extends Component{
    render(){
        //console.log(Routes,'dd')
        return (
            <BrowserRouter>
                <Switch>
                     <Redirect exact from='/' to='/index/home'></Redirect>
                     <Routerss routes={Routes.routes}></Routerss> 
                    {/* {
                        //这样写的是为了吧路由进行封装起来，哪里需要就把数据进行传过去
                         Routes.routes.map((route,index)=>{
                            console.log(route)
                            return <Route key={index} path={route.path} render={(router)=>{
                                console.log(router,'sdsd')//这是一个对象{match: {…}, location: {…}, history: {…}, staticContext: undefined}里面包含路由信息（match、location）
                                return <route.component {...router} routes={route.children}></route.component>
                            }}></Route>
                        }) 
                    } */}
                </Switch>    
            </BrowserRouter>
        )
    }
}
export default App