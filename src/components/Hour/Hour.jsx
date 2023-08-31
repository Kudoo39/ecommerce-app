import React from "react";

const Hour = () => {
  return (
    <div>
      <h2>Operating Hours and Order Availability</h2>
      <p>
        Saigon Sandwich restaurant operates through the following hours for
        orders on Wolt and Foodora:
      </p>
      <ul>
        <li>Monday to Friday: 11:00 AM - 5:30 PM</li>
        <li>Saturday and Sunday: Closed</li>
      </ul>
      <p>You can place orders during these hours on the following platforms:</p>
      <ul>
        <li>
          <a
            href="https://wolt.com/en/fin/turku/restaurant/saigon-sandwich"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on Wolt
          </a>
        </li>
        <li>
          <a
            href="https://www.foodora.fi/en/restaurant/s6bc/saigon-sandwich"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on Foodora
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hour;
