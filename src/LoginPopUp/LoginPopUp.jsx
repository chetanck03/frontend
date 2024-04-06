import "./LoginPopUp.css";
import { useState } from "react";
import { assets } from "../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">

        {/* Title */}
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        {/* Inputs */}
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Password" required />
        </div>

        {/* Button */}

        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>

        {/* Conditions */}

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing , I agree to the terms of use & privacy policy.</p>
        </div>

        {/* checking the state */}

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
          
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
