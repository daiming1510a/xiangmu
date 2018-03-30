import React,{Component} from 'react'
import './Indexs.css'
import $http from '../../utils/http'
import Routerss from '../../component/routerss.jsx'
import {NavLink,Redirect} from 'react-router-dom'
class Index extends Component{
    componentDidMount(){
    //    $http.get('/server/test.json',{id:1,name:'lucy'})
    //     .then(data=>{console.log(data)})
    //     .catch(error=>{console.error(error)})
    }
    render(){
        const arr=[
            {
                icon:'icon iconfont icon-shouye',
                text:'首页',
                to:'/index/home'
            },{
                icon:'icon iconfont icon-fenlei',
                text:'分类',
                to:'/index/catagory'
            },{
                icon:'icon iconfont icon-gouwuche',
                text:'购物车',
                to:'/index/car'
            },{
                icon:'icon iconfont icon-wode',
                text:'我的',
                to:'/index/mine'
            }
        ]
        const {routes}=this.props;
        return (
            <div className='dls'>
               <div className="top">
                   <Routerss routes={routes}></Routerss>
               </div>
               <div className='bot'>
                   {
                       arr.map((item,index)=>{
                           return (
                                   <NavLink to={item.to} className='lis' key={index} activeClassName='tab-style'>
                                     <span><i className={item.icon}></i></span>
                                     <span>{item.text}</span>
                                   </NavLink>
                           )
                       })
                   }
                   {/* <li>
                       <span><i className='icon iconfont icon-shouye'></i></span>
                       <span>首页</span>
                   </li>
                   <li>
                       <span><i className='icon iconfont icon-fenlei'></i></span>
                       <span>分类</span>
                   </li>
                   <li>
                       <span><i className='icon iconfont icon-gouwuche'></i></span>
                       <span>购物车</span>
                   </li>
                   <li>
                       <span><i className='icon iconfont icon-wode'></i></span>
                       <span>我的</span>
                   </li> */}
               </div>
            </div>
        )
    }
}
export default Index