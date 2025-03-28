import { useState } from "react";
import "../styles.css";

const SignUp = ({ toggleForm }) => {
  return (
    <div className="wrapper">
      <h1>SIGN UP</h1>
      <form className="form">
        <div className="input-group">
          <label htmlFor="student-number">Student Number</label>
          <input type="text" id="student-number" placeholder="Enter your student number" required />
        </div>

        <div className="input-group">
          <label htmlFor="email">Student Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="input-group">
            <label htmlFor="organization">Select Organization</label>
            <div className="select-wrapper">
                <select>
                    <option value="" disabled selected>Select your organization</option>
                    <option value="org1">Organization 1</option>
                    <option value="org2">Organization 2</option>
                </select>
            </div>

        </div>

        <div className="input-group">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" placeholder="Enter your first name" required />
        </div>

        <div className="input-group">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" placeholder="Enter your last name" required />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />
        </div>

        <button type="submit">Sign Up</button>
        
        <div className="form-switch">
            <p>Already have an account?</p>
            <button type="button" className="link-button" onClick={toggleForm}>
                Log in here
            </button>
        </div>

      </form>
    </div>
  );
};

export default SignUp;
