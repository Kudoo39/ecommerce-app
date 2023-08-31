import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <ul className={`nav-list ${isNavOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/hour">Operating Hours</Link>
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
