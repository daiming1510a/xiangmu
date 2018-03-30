import React,{Component} from 'react'
class Detail extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
       // console.log(this.props)
        return (
            <div>Detail</div>
        )
    }
}
export default Detail