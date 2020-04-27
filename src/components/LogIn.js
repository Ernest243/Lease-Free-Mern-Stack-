import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class LogIn extends Component 
{

     constructor(props)
    {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            emailAddress: " ",
            passwordUser: " "
        }
    }

    onChangeEmail(e) {
        
        this.setState({ emailAddress: e.target.value });
    }

    onChangePassword(e) {

        this.setState({ passwordUser: e.target.value });
    }
  
    onSubmit(e) {

        e.preventDefault();

        const userLogs = {

            email: this.state.emailAddress,
            password: this.state.passwordUser
        };


        axios.post('http://localhost:5001/user/login', userLogs)
            .then(res => console.log(res.data));

    }
 

    render() 
    {
        return (

           <div className="container" style={{marginTop: '200px'}}>
               <form className="myLabel" onSubmit={this.onSubmit}>
                   <div className="form-row">
                       <div className="form-group col-md-6">
                           <label>Email address</label>
                           <input type="email" className="form-control" placeholder="Email address" required 
                           value={this.state.emailAddress}
                           onChange={this.onChangeEmail}/>
                       </div>
                   </div>
                   <div className="form-row">
                       <div className="form-group col-md-6">
                           <label>Password</label>
                           <input type="password" className="form-control" required placeholder="Password" 
                           value={this.state.passwordUser}
                           onChange={this.onChangePassword}/>
                       </div>
                   </div>
                   <div className="form-group">
                       <button type="submit" className="btn btn-primary">Log in</button>
                   </div>
                   <div className="form-group">
                       <Link to="/signUp" href="#link" className="myLink"><ins>Don't have an account? Sign up.</ins></Link>
                   </div>
               </form>
           </div>
        )
    }  


}

export default LogIn;