import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class App extends Component {
   state={
    email:'',
    password:'',
    formErrors:{
      email:' ',
      password:' '
    }
   };

   handleChange = (e)=>{
     e.preventDefault();
     const {name,value} = e.target;
     console.log("changed",name,value);
     let formErrors = this.state.formErrors;
     switch(name){
       case "email":
       formErrors.email = emailRegex.test(value) && value.length >0 ? " " : "Enter a valid Email address"
       break;
       case "password":
       formErrors.password = value.length < 6 ? "minimum 6 characters required " : " "
       break;
       default:
       break;
     }

     this.setState({ formErrors ,[name]:value});
   }
  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
      <div className = "form-wrapper">
      <form>
       <label htmlFor = "email">Email</label><br/>
       <input 
        type = "email" 
        name = "email" 
        placeholder="Enter email address" 
        onChange = {this.handleChange}/><br/>
        {formErrors.email.length > 0 &&(
          <span className = "errorMesage">{formErrors.email}</span>
        )}
       <label htmlFor = "password">Password</label><br/>
       <input 
        type = "password" 
        name = "password" 
        placeholder="Enter password" 
        onChange = {this.handleChange} /><br/>
        {formErrors.password.length >0 && (
          <span className = "errorMesage">{formErrors.password}</span>
        )}
        <div className = "createAccount">
        <button >SignIn</button><br/>
        <small>SignUp</small>
        </div>
      </form>
      </div>
      </div>
    );
  }
}

export default App;
