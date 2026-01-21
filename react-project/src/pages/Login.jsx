import React, { useState } from "react";
import "./login.css";

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [activeButton, setActiveButton] = useState(false);

  return (
    <div className={`box1 ${showSignup ? "show-sign" : ""}`}>
      {/* Toggle Login button */}
      <button
        className={`toggle-login ${activeButton ? "active" : ""}`}
        onClick={() => setActiveButton(!activeButton)}
      >
        Login
      </button>

      {/* LOGIN */}
      <div className="form-wrapper">
        <form className="form">
          <h2>Login</h2>

          <div className="input-group">
            <input type="text" required />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="remember">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>

          <button className="btn">Login</button>

          <div className="sign-link">
            <p>
              Don't have an account ?
              <span
                className="signup-link"
                onClick={() => setShowSignup(true)}
              >
                {" "}
                SignUp
              </span>
            </p>
          </div>
        </form>
      </div>

      {/* SIGN UP */}
      <div className="form-wrapper-sign-up">
        <form className="form">
          <h2>Sign Up</h2>

          <div className="input-group">
            <input type="text" required />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>

          <button className="btn">Sign Up</button>

          <div className="sign-link">
            <p>
              Already have an account ?
              <span
                className="signIn-link"
                onClick={() => setShowSignup(false)}
              >
                {" "}
                Sign In
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
