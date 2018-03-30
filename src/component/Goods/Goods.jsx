import React, { Component } from "react"
import $http from '../../utils/http'
import '../../static/css/goods.css'
import Lazyload from 'react-lazyload'
import { getCookie } from '../../utils/utils'
import { ToastContainer, toast } from 'react-toastify'


 import {connect} from 'react-redux'
 import {ADD_CART} from './../../store/reducer'
class Placehodlder extends Component {
    render() {
        return (
            <img src={require('../../static/img/one.jpg')}></img>
        )
    }
}
class Goods extends Component {
    addCar(e) {
        let {data}=this.props;
        e.stopPropagation()//阻止事件冒泡。点击购物车时不进行跳转
        if (getCookie('token')) {//判断cookie是否存在
            $http.post('/user/Cart/addCart', {
                goods_id: data.goods_id,
                goods_info: data,//把整个数据都传入后台
                token: getCookie('token')
                // token:document.cookie.split('=')[0]
            }).then(res => {
                if (res == 1) {
                    toast.success('购物车添加成功', {
                        position: toast.POSITION.TOP_CENTER
                    })
                    
                    this.props.dispatch({
                        type:ADD_CART,
                        data:{
                            ...data,
                            count:1,
                            selected:0
                        }
                    })
                } else {
                    toast.warn(res.info, {//登录失败
                        position: toast.POSITION.TOP_CENTER,
                        hideProgressBar: true,//使滚动条消失
                        autoClose: 2000,//关闭时间
                        className: 'test'//添加类名
                    })
                    this.props.history.push('/login', {
                        //from:'/index/home'
                        from: this.props.location.pathname
                    })
                }

            })
        } else {//当cookie不存在就跳转进行登录
            this.props.history.push('/login', {
                //from:'/index/home'
                from: this.props.location.pathname
            })
        }

    }
    toDetail(goods_id) {//进行挑战到详情页
        //console.log(goods_id)
        this.props.history.push('/detail?goods_id=' + goods_id, {
            goods_id: goods_id
        })

    }
    render() {
        let { data } = this.props;
        return (
            <dl className='dlss' onClick={() => this.toDetail(data.goods_id)}>
                <dt><Lazyload overflow once height={'100%'} placeholder={<Placehodlder></Placehodlder>} debounce={100}><img src={'http://www.lb717.com//' + data.obj_data} alt="" /></Lazyload></dt>
                <dd>
                    <p className='goods-detail'>{data.goods_name}</p>
                    <p><span className='goods-price'>{data.discount_price}</span><span onClick={this.addCar.bind(this)} className='cc icon iconfont icon-gouwuche'></span></p>
                    <ToastContainer></ToastContainer>
                </dd>
            </dl>
        )
    }
}
export default connect()(Goods)