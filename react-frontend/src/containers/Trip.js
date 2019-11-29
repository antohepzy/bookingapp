import React,{Component} from 'react';

class Trip extends Component{
    constructor(props){
        super(props);
        this.state={
            trip:"airport"
        }
    }
    render(){
        let { trip } = this.state;
        return(
            <div>
                <ul  className="trip">
                <li><a  className="airport white" href="#" onClick={()=>this.setState({trip:""})}>One way</a></li>
                <li><a  className="airport white" href="#" onClick={()=>this.setState({trip:""})}>round trip</a></li>
                <li><a  className="airport white" href="#" onClick={()=>this.setState({trip:""})}>multicity</a></li>
                <li><a  className="airport white" href="#" onClick={()=>this.setState({trip:"airport"})}>airport</a></li>
                </ul>
                { 
                    (trip === "airport")
                    ?
                    <div>
                        <h3 className="white">Travel to and from the bangalore airport hasslefree!</h3>
                        <a className="white blue" href="/login">Airport - 1500/-</a>
                    </div>
                    :
                    null
                }   
                
            </div>
        )
    }
}

export default Trip;