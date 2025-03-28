import { useState } from "react";
import "../styles.css";

const Login = ({ toggleForm }) => {
  return (
    <div className="wrapper">
      <h1>LOGIN</h1>
      <form className="form">
        <div className="input-group">
          <label htmlFor="student-number">Student Number</label>
          <input type="text" id="student-number" placeholder="Enter your student number" required />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" class="login-button">Login</button>
        
        <button type="button" className="forgot-password">Forgot Password?</button>
        
        <div className="form-switch">
            <p>Don't have an account?</p>
            <button type="button" className="link-button" onClick={toggleForm}>
                Register here
            </button>
        </div>


      </form>
    </div>
  );
};

export default Login;
