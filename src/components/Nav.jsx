import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <a href="">About</a>
        <a href="">Contact</a>
      </ul>
    </nav>
  );
};

export default Nav;
