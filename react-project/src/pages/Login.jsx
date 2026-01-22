import React, { useState } from "react";
import "./login.css";
import Prism from "./animation-login";
import tailwind from 'tailwind.css';

function Login() {
  const [open, setOpen] = useState(false);
  const [flip, setFlip] = useState(false);

  return (
    <div className="page">

      {/* LOGIN BUTTON */}
      {!open && (
        <button className="login-btn" onClick={() => setOpen(true)}>
          Login
        </button>
      )}

      {/* CARD */}
      {open && (
        <div className={`card ${flip ? "flip" : ""}`}>

          {/* LOGIN */}
          <div className="face front">
            <span className="close" onClick={() => {
              setOpen(false);
              setFlip(false);
            }}>×</span>

            <h2>Login</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <button className="btn">Login</button>

            <p onClick={() => setFlip(true)}>
              New here? <span>Create account</span>
            </p>
          </div>

          {/* SIGN UP */}
          <div className="face back">
            <span className="close" onClick={() => {
              setOpen(false);
              setFlip(false);
            }}>×</span>

            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button className="btn">Sign Up</button>

            <p onClick={() => setFlip(false)}>
              Already have account? <span>Login
               
              </span>
            </p>
 <h1 className="text-red-800"></h1>


          </div>

        </div>
      )}

    </div>
  );
}

export default Login;

