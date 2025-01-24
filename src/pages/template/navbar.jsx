import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="navbar-brand">
            P2PConnect
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="navbar-auth">
          <Link to="/login" className="login-btn">
            Login
          </Link>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>
      </nav>
    );
}