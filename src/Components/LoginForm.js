import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LoginForm extends React.Component{
    render(){
return(
     <form action="action_page.php" method="post">
  

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

  
    <NavLink to="/"> <button type="submit">Login</button></NavLink>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div className="container">
    <button type="button" className="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
);
    }
}export default LoginForm