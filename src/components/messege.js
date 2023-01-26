import React,{Component} from "react";
class Message extends Component {
    render(){
        return (
            <h1>
                it is Message for {this.props.name}
            </h1>
        )
    }
}

export default Message