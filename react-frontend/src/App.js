import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import MainPage from './containers/MainPage';
import Login from './containers/Login';
import Driver from './containers/Driver';
import BookedTicket from './containers/BookedTicket';

class App extends Component {
  render(){
    return (
      <div>
        <Route path="/aq-index" component={ MainPage }/>
        <Route path="/login" component={ Login }/>
        <Route path="/driver" component={ Driver }/>
        <Route path="/success/:user" component={ BookedTicket }/>
      </div>
    );
  }
 }

export default App;
