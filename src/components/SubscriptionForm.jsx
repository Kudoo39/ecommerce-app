import React, { useState } from "react";
import "./SubscriptionForm.css";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="subscription-form-container">
      <h3 className="subscription-title">Stay Updated on Our Latest Offers!</h3>
      <p className="subscription-description">
        Subscribe to receive notifications about new restaurant offers.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="subscription-input"
          type="email"
          placeholder="Your Email..."
          value={email}
          onChange={handleEmailChange}
        />
        <button className="subscription-button" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
