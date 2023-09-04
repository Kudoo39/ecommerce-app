import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const form = useRef();

  const handleInput = (e) => {
    (e) => setPhone(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fk2ku0m",
      "template_onj6mph",
      form.current,
      "vRHyi9tZzBV2Fg8hN"
    );
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setShowThankYou(true);
  };

  return (
    <div className="container contact-container">
      <h2>{t("contact.title")}</h2>
      <p className="contact-description">{t("contact.description")}</p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label"
            style={{ fontWeight: "bold" }}
          >
            {t("contact.name")}
          </label>
          <input
            placeholder={t("contact.typename")}
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setShowThankYou(false);
            }}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
            style={{ fontWeight: "bold" }}
          >
            {t("contact.email")}
          </label>
          <input
            placeholder={t("contact.typeemail")}
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="phone"
            className="form-label"
            style={{ fontWeight: "bold" }}
          >
            {t("contact.phone")}{" "}
            <em style={{ fontStyle: "italic" }}>{t("contact.require")}</em>
          </label>
          <input
            placeholder={t("contact.typephone")}
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="message"
            className="form-label"
            style={{ fontWeight: "bold" }}
          >
            {t("contact.message")}
          </label>
          <textarea
            placeholder={t("contact.typemessage")}
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-button">
          {t("contact.submit")}
        </button>
      </form>
      {showThankYou && (
        <h4 style={{ textAlign: "center" }}>{t("contact.thankYou")}</h4>
      )}
    </div>
  );
};

export default Contact;
