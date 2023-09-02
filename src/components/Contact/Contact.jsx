import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

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
  };

  return (
    <div className="container contact-container">
      <h2>Contact Us</h2>
      <p className="contact-description">
        If you have any questions or feedback, feel free to reach out to us!
      </p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label"
            style={{ fontWeight: "bold" }}
          >
            Name
          </label>
          <input
            placeholder="Type your name..."
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
            style={{ fontWeight: "bold" }}
          >
            Email
          </label>
          <input
            placeholder="Type your email..."
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
            Phone Number <em style={{ fontStyle: "italic" }}>(Not Required)</em>
          </label>
          <input
            placeholder="Type your phone number..."
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
            Message
          </label>
          <textarea
            placeholder="Type your message..."
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
