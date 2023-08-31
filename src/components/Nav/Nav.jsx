import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav>
      <ul className={`nav-list ${isNavOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeNav}>
          Home
        </Link>
        <Link to="/menu" onClick={closeNav}>
          Menu
        </Link>
        <Link to="/about" onClick={closeNav}>
          About
        </Link>
        <Link to="/contact" onClick={closeNav}>
          Contact
        </Link>
        <Link to="/hour" onClick={closeNav}>
          Operating Hours
        </Link>
      </ul>

      <button
        className={`nav-toggle ${isNavOpen ? "open" : ""}`}
        onClick={toggleNav}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </nav>
  );
};

export default Nav;
