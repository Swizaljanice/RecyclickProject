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

const Login = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/')
    }
    const handleNext = () => {
        navigate("/signup")
    }
    const style = { color: "white", fontSize: "1em" }

    return (
        <div className="login-page">
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={handleBack} className="custom-brand">
                        <FaArrowAltCircleLeft onClick={handleBack} style={style} /> Back
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text>
                            <h2>Login</h2>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="recyclick-card">
                <p className="recyclick-text">
                    <img src={logo} alt="Brand Logo" className="recyclick-logo" /> Recyclick
                </p>
            </div>

          
            <div className="form-container">
                <form>
                    <input type="email" placeholder="Email" className="email" />

                    <input type="password" placeholder="Password" className="password" />
                    <a href="#" className="forgot">Forgot Password?</a>
                    <button className="login">Login</button>

                    <div className="divider-container">
                        <hr className="line" />
                        <span className="text">or</span>
                        <hr className="line" />
                    </div>

                    <p className="login-with">Login with</p>

                    <div className="logo-container">
                        <IoLogoApple className="iphone" />
                        <FcGoogle className="google" />
                        <IoLogoLinkedin className="linkedin" />
                    </div>

                    <p className="account">Don't Have An Account?</p>
                    <p className="sign-up" onClick={handleNext}>Sign Up</p>
                </form>
            </div>
        </div>
    );
}

export default Login;
