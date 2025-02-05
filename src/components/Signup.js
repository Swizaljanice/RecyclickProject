import React, { useState } from "react";
import "../styles/Signup.css";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { IoLogoLinkedin } from "react-icons/io5";
import logo from "../images/logo.png";

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSignup = () => {
    if (
      fullName === "Recyclick" &&
      contactNumber === "123456789" &&
      password === "recyclick123" &&
      rePassword === "recyclick123"
    ) {
      navigate("/verification");
    } else {
      alert("Invalid credentials! Please enter the correct details.");
    }
  };

  return (
    <div className="signup-page">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate("/login")} className="custom-brand">
            <FaArrowAltCircleLeft className="back-icon" />Back
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              <h2>Sign Up</h2>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="recyclick-card">
        <p className="recyclick-text">
          <img src={logo} alt="Recyclick Logo" className="recyclick-logo" /> Recyclick
        </p>
      </div>

      <div className="container form-container">
        <form className="signup-form">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="signup-input" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Contact Number" 
            className="signup-input" 
            value={contactNumber} 
            onChange={(e) => setContactNumber(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="signup-input" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Re-enter Password" 
            className="signup-input" 
            value={rePassword} 
            onChange={(e) => setRePassword(e.target.value)} 
          />
          <button type="button" className="signup-button" onClick={handleSignup}>
            Sign Up
          </button>

          <div className="divider-container">
            <hr className="line" />
            <span className="text">Or</span>
            <hr className="line" />
          </div>

          <p className="signup-with">Sign Up With</p>
          <div className="logo-container">
            <IoLogoApple className="social-logo" />
            <FcGoogle className="social-logo" />
            <IoLogoLinkedin className="social-logo" />
          </div>
          <p className="already-account">
            Already have an account? <span className="login-link" onClick={() => navigate("/login")}>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
