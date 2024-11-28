import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function LoginPage() {
  return (
    <div className="body">
      <div className="wrapper">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="register">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
