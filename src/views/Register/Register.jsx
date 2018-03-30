import React,{Component} from 'react'
import $http from '../../utils/http'
import './Register.css'
class Register extends Component{
    toRegister(){
        let {username,password}=this.refs
        $http.post('/user/register',{
            username:username.value,
            password:password.value
        }).then(res=>{
            if(res.success==1){
                this.props.history.push('/login')
            }
        })
    }
    render(){
        return (
            <div>
                <h3 className='heads'>注册</h3>
                <div className="bind">
                    <p className='ps'>用户名：<input type="text" className='username' ref='username'/></p>
                    <p className='pss'>密码：<input type="text" className='password' ref='password'/></p>
                </div>
                <button onClick={this.toRegister.bind(this)} className='btns'>注册</button>
            </div>
        )
    }
}
export default Register