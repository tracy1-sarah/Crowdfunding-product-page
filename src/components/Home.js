import React from "react";

export default function Home() {
  return (
    <div className="hero-desktop">
      <div className="navbar container">
          <a className="navbar-brand" >
            <img src="logo.svg" alt="logo" className="logo" />
          </a>
          <ul className="d-flex">
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
          </ul>
        </div>
    </div>
  );
}
