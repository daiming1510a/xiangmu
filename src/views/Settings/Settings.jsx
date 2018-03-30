import React,{Component} from 'react'
import {loginout} from '../../utils/utils'
class Settings extends Component{
    loginOut(){//取消登录，是cookie失效，超时或赋空字符串
        loginout()
        this.props.history.push('/index/home')
    }
    render(){
        return (
            <div id='setting'>
                <header>设置</header>
                <button onClick={this.loginOut.bind(this)}>退出登录</button>
            </div>
        )
    }
}
export default Settings