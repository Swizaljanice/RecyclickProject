import React, { useState, useEffect } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/Verification.css";
import { Navbar } from "react-bootstrap";

const Verification = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(60);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [canResend, setCanResend] = useState(false);
  const defaultOtp = ["0", "0", "0", "0"];

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleBack = () => {
    navigate("/signup");
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleResendOtp = () => {
    setTimer(60);
    setCanResend(false);
    setOtp(["", "", "", ""]); 
  };

  const handleConfirm = () => {
    if (otp.join("") === defaultOtp.join("")) {
      navigate("/success");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="verification-container">
      <Navbar className="back-icon">
        <FaArrowAltCircleLeft onClick={handleBack} style={{ color: "#566B30", fontSize: "1.5em" }} />
        &nbsp;Back
      </Navbar>

      <div className="otp-section">
        <p className="verification-title">Verification Code</p>
        <p className="verification-message">We have sent the verification code to your email address</p>

        <div className="otp-box-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="otp-box"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
            />
          ))}
        </div>

        {canResend ? (
          <button className="resend-otp-button" onClick={handleResendOtp}>Resend OTP</button>
        ) : (
          <p className="otp-timer">Resend OTP in {timer}s</p>
        )}

        <button className="confirm-button" onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default Verification;
