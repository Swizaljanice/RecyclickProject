import React from "react";
import { useNavigate } from "react-router-dom";
import success from "../images/success.png";
import "../styles/Success.css";

const Success = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/home"); // Redirect to Home.js
  };

  return (
    <div className="success-container">
      <img src={success} alt="Success Tick" className="success-image" />
      <h2>Success</h2>
      <p>Congratulations! You Have Been</p>
      <p>Successfully Authenticated</p>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default Success;
