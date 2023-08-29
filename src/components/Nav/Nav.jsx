import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <Link to="/restaurant-app">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/restaurant-app">About</Link>
        <Link to="/restaurant-app">Contact</Link>
      </ul>
    </nav>
  );
};

export default Nav;
