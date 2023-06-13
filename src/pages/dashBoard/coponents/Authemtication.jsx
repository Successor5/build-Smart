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