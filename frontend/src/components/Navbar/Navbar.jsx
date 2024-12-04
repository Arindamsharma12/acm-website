import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        {/* Logo Section */}
        <a className="navbar-brand" href="#">
          <img
            src="logo3.png" // Transparent background logo
            alt="ACM Tech Club Logo"
            width="80"
            height="80"
          />
        </a>
        <a className="navbar-brand" href="#">
          ACM Tech Club
        </a>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* `ms-auto` aligns items to the right */}
            <li className="nav-item">
              <a className="nav-link active custom-font" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-font" href="#">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-font" href="#">
                Quiz
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-font" href="#">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-font" href="#">
                Zenith
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
