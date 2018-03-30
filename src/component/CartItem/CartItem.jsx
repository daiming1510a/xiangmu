import React,{Component} from 'react'
import {connect} from 'react-redux'
import mapDispatchToProps from './dispatch'
class CartItem extends Component {
    constructor(){
        super()
        this.state={
            selectedClass:''
        }
    }
    toggleSelect(){
        
    }
    render() {
        let {updateCount,toggleSelect,item}=this.props;
        //console.log(item)
        return (
            <li>
                <span className={'select-btn icon iconfont '+(item.selected==0?'':'icon-dui')} onClick={()=>{toggleSelect(1-item.selected,item.goods_id)}}></span>
                <span className='goods-img'>
                    <img src={"http://www.lb717.com" + item.obj_data} alt="" />
                </span>
                <div className='right-area'>
                    <p>{item.goods_name}</p>
                    <div className='flex'>
                        <div className='price-box'>
                            <p>X{item.count}</p>
                            <p>￥{item.discount_price}</p>
                        </div>
                        <div className='count-box'>
                            <span onClick={() => updateCount(--item.count, item.goods_id)}>-</span>
                            <span>{item.count}</span>
                            <span onClick={() => updateCount(++item.count, item.goods_id)}>+</span>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
export default connect(null,mapDispatchToProps,null,{pure:false})(CartItem)