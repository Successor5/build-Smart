import React, { useState } from "react";
import "../styles/RegisterStyle.css";
import pic from "../../../MyAssets/Screenshot 2023-06-07 133228.png";
import picture from "../../../MyAssets/Screenshot 2023-06-09 153021.png";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsButtonVisible(e.target.value.includes("@gmail.com") && password !== "");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsButtonVisible(email.includes("@gmail.com") && e.target.value !== "");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mai">
      <h1 className="b">Log In</h1>
      <img src={picture} alt="" className="a" />
      <div className="semiMain">
        <div className="smallMain">
          <h3 className="text">UserName</h3>
          <input
            type="text"
            id="usernameInput"
            className="single-line-input"
            placeholder="Enter text"
          />
          <h3>Email</h3>
          <input
            type="email"
            id="emailInput"
            className="x"
            placeholder="Enter text"
            value={email}
            onChange={handleEmailChange}
          />
          <h3 className="text1">Password</h3>
          <input
            type="password"
            id="passwordInput"
            className="y"
            placeholder="Enter text"
            value={password}
            onChange={handlePasswordChange}
          />
          <h3 className="text2">PhoneNumber</h3>
          <input
            type="text"
            id="phoneNumberInput"
            className="j"
            placeholder="Enter text"
          />
          {isButtonVisible && (
            <button className="sign-up-button" onClick={handleFormSubmit}>
              Sign Up
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
