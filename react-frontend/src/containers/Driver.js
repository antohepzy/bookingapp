import React,{Component} from 'react';
import NavBar from '../components/NavBar';
import "../css/app.css";
import * as actions from '../actions';
import DisplayDriver from './DisplayDriver';
import BookingPage from './BookingPage';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            filter:"",
            drivers:[],
            select:false
        }
    }

    setFilter= (e)=>{
        this.setState({filter:e.target.value});
    }

    filterDriver = () =>{
        let {drivers,filter} = this.state;
        if(filter && filter!=="All"){
            return drivers.filter(person => person.language.toLowerCase() === filter.toLowerCase())
        }
        else{
            return drivers;
        }  
    }

     selectDriver=(driver)=>{

        this.setState({select:driver});
    }

    async componentDidMount(){
        const data = await actions.getDrivers(this.props.token).catch(e=>console.log(e));
        this.setState({drivers:data});
    }

    render(){
        let {drivers,filter,select} = this.state;
        return(
            <div>
               {
                   !select
                   ?
                    (
                        <div className="chooseDriver">
                        <div className="filter">
                                <h2>Filters</h2>
                                <h3>Language</h3>
                                <input type="radio" name="language" value="English" onClick={this.setFilter}/>English<br/>      
                                <input type="radio" name="language" value="Hindi" onClick={this.setFilter}/>Hindi<br/>      
                                <input type="radio" name="language" value="Kannada" onClick={this.setFilter}/>Kannada<br/>
                                <input type="radio" name="language" value="All" onClick={this.setFilter}/>All<br/>
                            </div>
                        <div className="display">
                            {
                            (drivers.length>0)
                            ?
                            <div>
                            <h2 className="middle">Choose Driver for the ride</h2>
                            { 
                                this.filterDriver().map(driver=><DisplayDriver driver={driver} selectDriver={this.selectDriver}/>) 
                            }
                            </div>    
                            :
                            <h2>No match found..</h2>
                            }
                        </div>
                        </div>
                    )

                    :

                    <BookingPage select={select} token={this.props.token}/>
               }
               
            </div>
        )
    }
}

export default Login;