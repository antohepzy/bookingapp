import React,{Component} from 'react';
import * as actions from "../actions";
import "../css/app.css";
import NavBar from '../components/NavBar';

class BookedTicket extends Component{
    constructor(props){
        super(props);
        this.state={
            trip:{},
            user:{}
        }
    }
    async componentDidMount(){
        let userId = this.props.match.params.user;
        const trip = await actions.getTrip(userId).catch(e=>console.log(e));
        this.setState({trip,user:trip.user});
    }
    render(){
        let {trip,user} = this.state
        return(
            <div>
                <NavBar/>
               <div  className="ticket">
                <h1 className="middle green space"> Booking Successful!!! </h1>
                <div className = "ticketContainer">
                    {
                    (this.state.trip)
                    ?
                    <div>
                        <div className="inline center">
                            <h4> Journey Date </h4>
                            <h4 className="space"> {trip.date} </h4>
                            <h4> {trip.time} </h4>
                        </div>
                        <div className="inline">
                            <h3 className="space"> Pickup </h3>
                            <h4 className="space"> {trip.address} </h4>
                        </div>

                        <div className="inline">
                            <h3 className="space"> Drop </h3>
                            <h4 className="space"> Airport </h4>
                        </div>

                        <div className="inline">
                            <h3 className="space"> Fare </h3>
                            <h4 className="space"> 1500/- </h4>
                        </div>
                    </div>
                    :
                    null
                    }
                </div>
            </div> 
            </div>  
             
        )
    }
}

export default BookedTicket;