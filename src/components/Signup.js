import React from "react";
import "../styles/Signup.css";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { IoLogoLinkedin } from "react-icons/io5";
import logo from "../images/logo.png";

const Signup = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="navbar">
        <div className="back-button" onClick={handleBack}>
          <FaArrowAltCircleLeft className="back-icon" /> Back
        </div>
        <h1>SignUp</h1>
      </div>
      <div className="signup-card">
        <img src={logo} alt="Recyclick Logo" className="signup-logo" />
        <p className="signup-title">Recyclick</p>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="signup-input"
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="signup-input"
          />
          <div className="password-field">
            <input
              type="password"
              placeholder="Password"
              className="signup-input"
            />
          </div>
          <div className="password-field">
            <input
              type="password"
              placeholder="Re Enter Password"
              className="signup-input"
            />
          </div>
          <button type="button" className="signup-button">
            Signup
          </button>
          <div className="divider-container">
            <hr className="line" />
            <span className="text">Or</span>
            <hr className="line" />
          </div>
          <p className="signup-with">Signup With</p>
          <div className="logo-container">
            <IoLogoApple className="social-logo" />
            <FcGoogle className="social-logo" />
            <IoLogoLinkedin className="social-logo" />
          </div>
          <p className="already-account">
            Already Have An Account? <span className="login-link">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
