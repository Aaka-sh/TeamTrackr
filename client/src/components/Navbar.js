import React from "react";
export default function Navbar() {
  return (
    <header
      id="header"
      className="header fixed-top d-flex align-items-center mx-auto"
    >
      <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">TeamTrackr</span>
        </a>
      </div>
      {/* End Logo */}
      <div id="navbar" className="navbar">
        <ul>
          <li>
            <a className="nav-link scrollto" href="/login">
              Login
            </a>
          </li>
          <li>
            <a className="getstarted scrollto" href="/register">
              Register
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </div>
    </header>
  );
}
