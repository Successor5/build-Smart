import React, { useState } from "react";
import "../styles/LoginStyle.css";
import pic from "../../../MyAssets/Screenshot 2023-06-07 133228.png";
import picture from "../../../MyAssets/Screenshot 2023-06-09 153021.png";

function Login() {
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
    <div className="main">
<<<<<<< HEAD
      <h1 className="w" onClick={()=>{window.location.href = "/"}}>Sign Up</h1>
=======
      <h1 className="b">Sign Up</h1>
>>>>>>> 55a5b4f02f5e25f968566b9601b55e54540d3a27
      <img src={picture} alt="" className="a" />
      <div className="semiMain">
        <div className="smallMain">
          <h3>Email</h3>
          <input
            type="email"
            id="emailInput"
            className="x"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          <h3 className="text1">Password</h3>
          <input
            type="password"
            id="passwordInput"
            className="x"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {isButtonVisible && (
          <button className="sign-up-button" onClick={handleFormSubmit}>
            Log In
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
