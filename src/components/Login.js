import React from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import logo from "../images/logo.png";
import { IoLogoApple } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { IoLogoLinkedin } from "react-icons/io5";

const Login =()=>{
const navigate = useNavigate();
const handleBack = () =>{
    navigate('/')
}
const handleNext = () =>{
  navigate("/signup")
}
const style={color:"white", fontSize:"1.5em"}


    return(
        <div>
  <Navbar className="bg-body-tertiary">
    <Container>
        <Navbar.Brand onClick={handleBack} className="custom-brand">
        <FaArrowAltCircleLeft onClick={handleBack} style={style} /> Back
      </Navbar.Brand>
    <Navbar.Collapse className="justify-content-center">
        <Navbar.Text>
          <h1>Login</h1>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 <br/>
  <div className="recyclick-card">
    
    <p className="recyclick-text"><img src={logo} alt="Brand Logo" className="recyclick-logo" /> Recyclick</p>
  </div>
  <div className="container">
    <form>
        <input type="email" placeholder="Email" className="email"/>
        <br/>
        <br/>
        <input type="password" placeholder="Password" className="password"/>
        <br/>
        <br/>
        <a href="#" className="forgot">Forgot Password?</a>
        <br/>
        <button className="login">Login</button>
        <br/>
        <div className="divider-container">
      <hr className="line" />
      <span className="text">or</span>
      <hr className="line" />
    </div>  
    <br/>
    <p className="login-with">Login with</p>
    <br/>
    <div className="logo-container">
      <IoLogoApple className="iphone" />
      <FcGoogle className="google" />
      <IoLogoLinkedin className="linkedin" />
    </div>
    <br/>
    <p className="account">Don't Have An Account?</p>
    <p className="sign-up" onClick={handleNext}>Sign Up</p>
    </form>
    
    
  </div>
  
</div>


    );
}

export default Login;