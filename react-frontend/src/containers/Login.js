import React,{Component} from 'react';
import NavBar from "../components/NavBar";
import * as actions from '../actions';
import Driver from "./Driver";

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            token:""
        } 
    }

    loginUser= async (e)=>{
        e.preventDefault();
        let value = e.target.elements;
        let newUser = {
            name:value.username.value,
            email:value.email.value,
            number:Number(value.number.value)
        }
        const data = await actions.loginUser(newUser).catch(e=>console.log(e));
        if(data){
            this.setState({token:data.token}); 
        }
      
    }
    render(){
        let {token} = this.state;
        return(
            <div>
                <NavBar />
                { token===""
                ?
                (
                    <div className="centered-form">
                    <div className="centered-form__box">
                        <h1>Login</h1>
                        <form onSubmit={this.loginUser}>
                            <label>Name</label>
                            <input type="text" name="username" placeholder="Name" required/>
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Email" required/>
                            <label>Number</label>
                            <input type="number" name="number" placeholder="Number" required/>
                            <button type="submit">Continue</button>
                        </form>
                    </div>
                    </div>
                )
                :
                <Driver token={token}/>
                }
                
        </div>
        )
    }
}

export default Login;