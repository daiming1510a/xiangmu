import React from 'react'
import Home from "../views/Home"
import Car from "../views/Car"
import Mine from "../views/Mine"
import Catagory from "../views/Catagory"
import List from "../views/List"
import Search from "../views/Search"
import Detail from "../views/Detail"
import Login from "../views/Login"
import Indexs from "../views/Indexs"
import Register from '../views/Register'
import Result from '../views/Result'
import Settings from '../views/Settings'
let Router={
    routes:[
        {
            path:"/index",
            component:Indexs,
            children:[
                {
                    path:"/index/home",
                    component:Home
                },{
                    path:"/index/car",
                    component:Car,
                    authorization:true
                },{
                    path:"/index/mine",
                    component:Mine,
                    authorization:true
                },{
                    path:"/index/catagory",
                    component:Catagory
                },{
                    path:"/index/search",
                    component:Search  
                },{
                    path:"/index/result",
                    component:Result
                }
            ]
        },
        {
            path:'/detail',
            component:Detail
        },{
            path:'/login',
            component:Login
        },{
            path:'/register',
            component:Register
        },{
            path:'/settings',
            component:Settings
        }   
     ]
 }
    

export default Router