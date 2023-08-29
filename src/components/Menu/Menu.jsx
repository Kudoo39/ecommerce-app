import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Bao from "./Bao";
import Drink from "./Drink";
import Main from "./Main";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Menu</h1>
      <div className="menu-nav">
        <Link to="/menu">Main</Link>
        <Link to="/menu/drink">Drink</Link>
        <Link to="/menu/bao">Side Dish</Link>
      </div>

      <div className="menu">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/drink" element={<Drink />} />
          <Route path="/bao" element={<Bao />} />
        </Routes>
      </div>
    </div>
  );
};

export default Menu;
