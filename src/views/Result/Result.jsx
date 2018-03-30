import React,{Component} from 'react'

class Result extends Component{
    componentDidMount(){
        let {location}=this.props;
        console.log(location.state)
        
    }
    render(){
        return (
            <div></div>
        )
    }
}
export default Result