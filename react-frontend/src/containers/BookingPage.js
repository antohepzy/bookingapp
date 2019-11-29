import React,{Component} from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';
import "../css/app.css";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import axios from 'axios';
import serverUrl from "../config";
import * as actions from "../actions";

class BookingPage extends Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date(),
            user:{
                name:"",
                email:"",
                number:"",
                _id:1
            }
        }
    }
    payNow=(e)=>{
        e.preventDefault();
        let data = e.target.elements;
        const info = {
			purpose: 'Travel',
			amount: '1500',
            buyer_name: "Bookit",
            name: data.name.value,
			email: data.email.value,
            phone: data.number.value,
            date: data.date.value,
            time: data.time.value,
            address: data.address.value,
            driver:this.props.select,
			user: this.state.user._id,
            redirect_url: `http://192.168.99.100:3000/success/${this.state.user._id}`,
			webhook_url: '/webhook/',
        };
        
    axios.post(serverUrl+'/pay', info )
    .then( res => {
        console.log( 'resp', res.data );
        window.location.href = res.data;

    } )
    .catch( ( error ) => console.log( error.response.data ));
    }

    async componentDidMount(){
        const user = await actions.getUser(this.props.token).catch(e=>console.log(e));
        this.setState({user})
    }

    render(){
        let {user} = this.state;
        return(
            <div className="ticket">
                 <h2 className="middle"> Book Now</h2>
            <div className="ticketContainer">
                <form onSubmit={this.payNow}>
                   
                    <div className="padding">
                    <label>
                        Name 
                        </label>
                        <input className="justify" type ="text" name="name" defaultValue={user.name} placeholder="Enter your name" />
                    
                    </div>
                    <div className="padding">
                    <label>
                        Email 
                        </label>
                        <input className="justify" type ="text" name="email" defaultValue={user.email} placeholder="Enter your Email" />
                    
                    </div>
                    <div className="padding">
                    <label>
                        Number 
                        </label>
                        <input className="justify" type ="number" name="number" defaultValue={user.number} placeholder="Phone Number" />
                    
                    </div>
                    <div className="padding">
                        <label>Date</label>
                        <DatePicker 
                        className="justify"
                            name="date"
                            selected={this.state.date}
                            onChange={date=>this.setState({date})}
                            minDate={moment().toDate()}
                            placeholderText="Select a day"
                            />
                        
                    </div>
                    <div className="padding">
                        <label>Pick up Adress</label>
                        <textarea  className="justify" name="address"></textarea>
                    </div>
                   
                    <div className="padding">
                        <label>Time</label>
                        <TimePicker
                        className="justify"
                        name="time"
                        use12Hours={true}
                        showSecond={false}/>
                    </div>
                    <button className="blue white select" type="submit" >Pay Now</button>
                </form>
            </div>
            </div>
        )
    }
}

export default BookingPage;