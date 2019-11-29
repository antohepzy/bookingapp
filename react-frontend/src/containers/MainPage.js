import React,{Component} from 'react';
import NavBar from '../components/NavBar';
import "../css/app.css";
import Trip from './Trip';

class MainPage extends Component {
    render(){
        return(
            <div className="mainContainer">
                <NavBar/>
                <h1 className="white"> Chauffeur Driven, On Demand.  </h1>
                <div className="container">
                    <Trip/>
                </div>
            </div>
        )
    }
}

export default MainPage;