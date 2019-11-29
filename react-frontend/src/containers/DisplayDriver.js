import React,{Component} from 'react';
import "../css/app.css";

class DisplayDriver extends Component{
    
checkDriver=()=>{
    this.props.selectDriver(this.props.driver.name);
}
    render(){
        let {driver} = this.props;
        return(
            
            <div className="driverTemplate">
                <div className="imageArea">
                    <img src={require("../images/driver.png")} />
                </div>
                <div className="driverDetails">
                    <h3>Name: {driver.name}</h3>
                    <h4>Speaks: {driver.language}</h4>
                </div>
                <button className="blue white select" onClick={this.checkDriver}>Select</button>
            </div>
            
        );
    }
}

export default DisplayDriver;