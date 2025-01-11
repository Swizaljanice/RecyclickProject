import React from "react";
import "../styles/WelcomeScreen.css";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
    const navigate=useNavigate();

    const handleGetStarted = () => {
        navigate("/login");
    }
  return (
    <div className="welcome-screen">
      <div className="content">
        <img
          src={logo}
          alt="Recyclick Logo"
          className="logo"
        /><h1 className="title">Recyclick</h1>
        <p className="subtitle">Recycle Smart, Go Green & Earn Rewards</p>
        <button className="get-started-btn" onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
