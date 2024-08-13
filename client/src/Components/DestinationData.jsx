import { Component } from "react";
import "./DestinationStyles.css";
import Mountain1 from "../assets/6.avif";
import Mountain2 from "../assets/4.avif";
class DestinationData extends Component{
    render(){
    return(
        <div className={this.props.className}>
                <div className="des-text">
                <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                    
                </div>
               <div className="image">
                <img alt="img1" src={Mountain1}/>
                <img alt="img2" src={Mountain2}/>
               </div>
            </div>
    );
}
}

export default DestinationData;