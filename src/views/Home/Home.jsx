import React,{Component} from 'react'
import Swipers from '../../component/Swipers'
import './Home.css'
import $http from '../../utils/http'
import Goods from '../../component/Goods'
class Home extends Component{
        constructor(){
            super()
            this.state={
                goodslist:[],
                channel_id:3,
                flag:true
            }
    }
    componentDidMount(){
        $http.post('/mall/index/getGoodsChannel',{channel_id:this.state.channel_id})
        .then(res=>{
            //console.log(JSON.parse(res),'ddhsd')
            this.setState({
                goodslist:JSON.parse(res).data.data
            })
           // console.log(JSON.parse(res))
        })
    }
    toSearch(){
        const {history} =this.props;
        history.push('/index/search')
        //console.log(this.props)
    }
    scrolling(){
        if(this.state.channel_id>9) return;
        if(!this.state.flag) return;
       let st=this.refs.scroller.scrollTop;
       let sw=this.refs.scroller.offsetHeight;//浏览器的高度
       let dh=this.refs.doc.offsetHeight;//内容的高度
       if(dh-(st+sw)<50){
           this.setState({
               channel_id:++this.state.channel_id
           })
             $http.post('/mall/index/getGoodsChannel',{channel_id:this.state.channel_id})
                .then(res=>{
                    this.setState({
                        goodslist:[...this.state.goodslist,...JSON.parse(res).data.data]//进行解构成数组
                    })
                    this.setState({
                        flag:false
                    })
                })
       }
    }
    render(){
       // console.log(this.state.goodslist,'weee')
        return (
            <div id='home' onScroll={this.scrolling.bind(this)} ref="scroller">
                <div ref='doc'>
                        <div className='header'><input type="text" onFocus={this.toSearch.bind(this)} className='ss' placeholder='请输入您要搜索的内容'/><i className='poss icon iconfont icon-fangdajing'></i></div>
                        <div className="banner">
                            <Swipers></Swipers>
                        </div>
                        <div className='section'>
                            <dl>
                                <dt><i className='icon iconfont icon-pingguo'></i></dt>
                                <dd>家乡味道</dd>
                            </dl>
                            <dl>
                                <dt><i className='icon iconfont icon-29'></i></dt>
                                <dd>生活健康</dd>
                            </dl>
                            <dl>
                                <dt><i className='icon iconfont icon-address'></i></dt>
                                <dd>时尚嗅觉</dd>
                            </dl>
                            <dl>
                                <dt><i className='icon iconfont icon-dazhongdianping'></i></dt>
                                <dd>美丽海洋</dd>
                            </dl>
                            <dl>
                                <dt><i className='icon iconfont icon-twitter'></i></dt>
                                <dd>羊肠小道</dd>
                            </dl>
                            <dl>
                                <dt><i className='icon iconfont icon-shoucang'></i></dt>
                                <dd>风土人情</dd>
                            </dl>
                            <dl>
                                <dt><i className='icon iconfont icon-didian'></i></dt>
                                <dd>山水乐土</dd>
                            </dl>
                            <dl>
                                <dt><i className='icon iconfont icon-pingfen'></i></dt>
                                <dd>美丽小道</dd>
                            </dl>
                        </div>
                        <div className='goods-list ks-clear'>
                            {
                                this.state.goodslist.map((item,index)=>{
                                    return (
                                        <Goods key={index} data={item} history={this.props.history} location={this.props.location}></Goods>
                                    )
                                })
                            }
                        </div>
                </div>
            </div>
        )
    }
}
export default Home