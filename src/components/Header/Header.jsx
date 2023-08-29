import React from "react";
import img1 from "../../assets/background6.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="text-content">
        <h1>Saigon Sandwich Bakery</h1>
        <p>
          Tasty Banh Mi sandwiches!
          <br />
          Saigon Sandwich is a restaurant <br />
          that sells Vietnamese sandwiches
          <br /> for You!
        </p>
      </div>
      <div className="background-image-container">
        <img src={img1} alt="Banhmi background" className="header-image" />
      </div>
    </div>
  );
};

export default Header;
