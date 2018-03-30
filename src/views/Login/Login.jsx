import React,{Component} from 'react'
import $http from '../../utils/http'
import {Link} from 'react-router-dom'
import './Login.css'
class Login extends Component{
    toLogin(){
       let {username,password}=this.refs
        $http.post('/user/login',{
            username:username.value,
            password:password.value
        }).then(res=>{
            //console.log(res)
            if(res.success==1){  
                let from =this.props.location.state?this.props.location.state.from||'index/home':'index/home';

                document.cookie='token='+res.token
                //使用cookie进行保存秘钥
                //this.props.history.push('/index/home')
              
                this.props.history.push(from)
            }
        })
    }
    render(){
        return  (
            <div>
                <div className="header">
                    <h3 className='heads'>登录</h3>
                    <p className='zhuce'><Link to='/register' style={{float:'right'}}>注册</Link></p>
                </div>
                <div className="bind">
                    <p className='ps'>用户名：<input type="text" className='username' ref='username'/></p>
                    <p className='pss'>密码：<input type="text" className='password' ref='password'/></p>
                </div>
                <button onClick={this.toLogin.bind(this)} className='btns'>登录</button>
            </div>
        )
    }
}
export default Login