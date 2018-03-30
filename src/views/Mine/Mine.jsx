import React,{Component} from 'react'
class Mine extends Component{
    toSetting(){
        this.props.history.push('/settings')
    }
    render(){
        return (
            <div id='mine'>
                <header>
                    <p><span className='icon iconfont icon-shezhi' onClick={this.toSetting.bind(this)}></span><span>我的商城</span></p>
                    <dl>
                        <dt></dt>
                        <dd>user name</dd>
                    </dl>
                </header>
            </div>
        )
    }
}
export default Mine