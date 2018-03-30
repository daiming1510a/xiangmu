import React,{Component} from 'react'
import './Catagory.css'
import $http from '../../utils/http'
class Catagory extends Component{
    constructor(){
        super()
        this.state={
            activeIndex:0
        }
    }
   toggleActive(idx){
       $http.get('/mobile/Category/categorySon',{sonid:idx+1}).then((res)=>{
           console.log(res)
       })
    // let url='https://h5api.m.tmall.com/h5/mtop.taobao.baichuan.smb.get/1.0/?jsv=2.4.3&appKey=12574478&t=1521638126956&sign=130787e455f1f23266ab0bb80cf3225b&api=mtop.taobao.baichuan.smb.get&v=1.0&type=originaljson&dataType=jsonp&timeout=10000'
    // $http.jsonp(url,'mtopjsonp4').then((res)=>{
    //     console.log(res)
    // })
        this.setState({
            activeIndex:idx
        })
   }
    render(){
        let dataList=['家乡味道','进口食品','牛奶乳品','休闲零食','米面粮油','生鲜果蔬','调味调料','酒水饮料']
        return (
            <div id='catagory'>
                <header><input type="text"/></header>
                <div className='catagory-wrap'>
                    <div className='left-side'>
                        <ul>
                            {
                               dataList.map((item,index)=>{
                                   return (
                                       <li className={this.state.activeIndex==index?'catagory-active':''} key={index} onClick={()=>this.toggleActive(index)}>{item}</li>
                                   )
                               }) 
                            }
                        </ul>
                </div>
                <div className='right-side'></div>
                </div>
                
            </div>
        )
    }
}
export default Catagory