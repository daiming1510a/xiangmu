import React, { Component } from 'react'
import { connect } from 'react-redux'
import mapStateToProps from './state'
import './Car.css'
import mapDispatchToProps from './dispatch'
import {UPDATE_GOODS_SELECTED} from '../../store/reducer'

import CartItem from '../../component/CartItem'
class Car extends Component {
    render() {
        let { cartList } = this.props;
        // console.log(this.props,'mnmn')
        return (
            <div id="cart">
                <header>购物车</header>
                <div className="goods_list">
                    <ul>
                        {
                            cartList.map((item, index) => {
                                return (
                                  <CartItem key={index} item={item}></CartItem>
                                )
                            })
                        }
                        {/* <li>
                            <span className='select-btn icon iconfont icon-dui'></span>
                            <span className='goods-img'>
                                <img src={require('./../../static/img/one.jpg')} alt=""/>
                            </span>
                            <div className='right-area'>
                                <p>asdsdfdf</p>
                                <div className='flex'>
                                    <div className='price-box'>
                                        <p>X1</p>
                                        <p>￥199</p>
                                    </div>
                                    <div className='count-box'>
                                        <span>-</span>
                                        <span>0</span>
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>
                        </li>  */}
                    </ul>
                </div>
                {/* <footer>
                    <div onClick={()=>{//函数作用域
                        this.setState({
                            str:str==="all"?"none":"all"
                        });
                        toggleSelectAll(str)
                    }}>全选<span className={'select-btn iconfont '+(selectAll?'icon-dui':'')}></span></div>
                    <div>总价<span>{totalCost}</span><span className="cart-btn" onClick={this.toDelGoods}>{pay}</span></div>
                </footer> */}

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Car)