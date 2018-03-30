import React,{Component} from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import './Swipers.css'
let img1=require('../../static/img/one.jpg')
class Swipers extends Component{
    componentDidMount(){
        new Swiper(this.refs.cen,{
            outoplay:true,
            loop:true//无缝滚动
        })
    }
    render(){
        return (
            <div className='swiper-container' ref='cen'>
                <div className='swiper-wrapper'>
                     <div className='swiper-slide'><img src={img1} alt=""/></div>
                    <div className='swiper-slide'><img src={require('../../static/img/two.jpg')} alt=""/></div>
                    <div className='swiper-slide'><img src={require('../../static/img/three.jpg')} alt=""/></div>
                    <div className='swiper-slide'><img src={require('../../static/img/foure.jpg')} alt=""/></div> 
                </div>
            </div>
        )
    }
}
export default Swipers