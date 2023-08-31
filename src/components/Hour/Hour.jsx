import React from "react";
import wolt from "../../assets/wolt.jpg";
import foodora from "../../assets/foodora.jpg";
import "./Hour.css";

const Hour = () => {
  return (
    <div className="hour-container">
      <h2>Operating Hours and Order Availability</h2>
      <p>
        Saigon Sandwich Bakery operates through the following hours for orders
        on Wolt and Foodora:
      </p>
      <ul>
        <li>
          Wednesday to Saturday: <h6>11:00 AM - 5:30 PM</h6>
        </li>
        <li>
          Sunday, Monday and Tuesday: <h6> Closed</h6>
        </li>
      </ul>
      <p>You can place orders during these hours on the following platforms:</p>
      <ul className="logo-links">
        <li>
          <a
            href="https://wolt.com/en/fin/turku/restaurant/saigon-sandwich"
            target="_blank"
            rel="noopener noreferrer"
            className="logo-link wolt-logo"
          >
            <img src={wolt} alt="Wolt Logo" />
            <span>Order on Wolt</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.foodora.fi/en/restaurant/s6bc/saigon-sandwich"
            target="_blank"
            rel="noopener noreferrer"
            className="logo-link foodora-logo"
          >
            <img src={foodora} alt="Foodora Logo" />
            <span>Order on Foodora</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hour;
