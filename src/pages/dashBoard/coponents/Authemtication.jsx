<<<<<<< HEAD
import React, { useState } from "react";
import "../styles/AuthenticationStyle.css";
import picture from "../../../MyAssets/Screenshot 2023-06-09 153021.png";

function Authentication() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    const numericValue = value.replace(/\D/g, "");
    const truncatedValue = numericValue.slice(0, 4);
    setInputValue(truncatedValue);
  };

  return (
    <div className="mai1">
      <img src={picture} alt="" className="a" />
      <h1 className="o">Verify Email</h1>
      <div className="small">
        <input
          className="box1"
          value={inputValue}
          onChange={handleInputChange}
          maxLength={4} 
        />
      </div>
      <button className="button"onClick={()=>{window.location.href = "/page2"}} >Continue</button>
    </div>
  );
}

export default Authentication;
=======
import React from "react";
import '../styles/AuthenticationStyle.css';
import picture from "../../../MyAssets/Screenshot 2023-06-09 153021.png";
 function Authentication() {
    return(
        <div className="mai1">
                  <img src={picture} alt="" className="a" />
                <h1 className="o">Verify Email</h1>
                  <div className="small">
                <input className="box1"></input>
                <div className="box2"></div>
                <div className="box3"></div>
            </div>
            <button className="button">
            Continue
            </button>
        </div>
    )
 } 
export default Authentication
>>>>>>> 55a5b4f02f5e25f968566b9601b55e54540d3a27
