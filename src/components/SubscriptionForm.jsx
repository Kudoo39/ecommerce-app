import React, { useState, useRef } from "react";
import "./SubscriptionForm.css";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const SubscriptionForm = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const form = useRef();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowThankYou(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fk2ku0m",
      "template_s6rc597",
      form.current,
      "vRHyi9tZzBV2Fg8hN"
    );
    setEmail("");
    setShowThankYou(true);
  };

  return (
    <div className="subscription-form-container">
      <h3 className="subscription-title">{t("subscriptionForm.title")}</h3>
      <p className="subscription-description">
        {t("subscriptionForm.description")}
      </p>
      <form ref={form} onSubmit={handleSubmit}>
        <input
          className="subscription-input"
          type="email"
          placeholder={t("subscriptionForm.placeholder")}
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button className="subscription-button" type="submit">
          {t("subscriptionForm.buttonText")}
        </button>
      </form>
      {showThankYou && <p>{t("subscriptionForm.thankYou")}</p>}
    </div>
  );
};

export default SubscriptionForm;
