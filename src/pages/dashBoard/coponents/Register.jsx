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
<<<<<<< HEAD
    window.location.href = "/page3";
=======
>>>>>>> 55a5b4f02f5e25f968566b9601b55e54540d3a27
  };

  return (
    <div className="mai">
<<<<<<< HEAD
      <div className="log">
        <h1 className="w" onClick={()=>{window.location.href = "/page1"}} >Log In</h1>
      </div>
=======
      <h1 className="b">Log In</h1>
>>>>>>> 55a5b4f02f5e25f968566b9601b55e54540d3a27
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
<<<<<<< HEAD
          <h3 className="text2">PhoneNumber</h3>
          <input
            type="text"
            id="phoneNumberInput"
            className="j"
            placeholder="Enter text"
            maxLength={11}
          />
=======
>>>>>>> 55a5b4f02f5e25f968566b9601b55e54540d3a27
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
<<<<<<< HEAD
=======
          <h3 className="text2">PhoneNumber</h3>
          <input
            type="text"
            id="phoneNumberInput"
            className="j"
            placeholder="Enter text"
          />
>>>>>>> 55a5b4f02f5e25f968566b9601b55e54540d3a27
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
