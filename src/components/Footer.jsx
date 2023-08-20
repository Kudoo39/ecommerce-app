import React from "react";
import "./Footer.css";
import { ImFacebook } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="" className="footer_name">
        SAIGON SANDWICH BAKERY
      </a>
      <div className="address">
        <h3>Address</h3>
        <p>
          Aninkaistenkatu 16, <br />
          20100 Turku, Finland
        </p>

        <p>
          <BsFillTelephoneFill /> &nbsp;{" "}
          <a id="phone" href="tel:0401667333">+358 40 166 7333</a>
        </p>
      </div>

      <ul className="links">
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
      <div className="footer_socials">
        <a target="_blank" href="https://www.facebook.com/saigonbakeryturku">
          <ImFacebook />
        </a>
        <a target="_blank" href="https://www.tiktok.com/@banhmisaigonturku">
          <FaTiktok />
        </a>
        <a
          target="_blank"
          href="https://wolt.com/en/fin/turku/restaurant/saigon-sandwich"
        >
          <MdLocalShipping />
        </a>
        <a
          target="_blank"
          href="https://www.foodora.fi/en/restaurant/s6bc/saigon-sandwich"
        >
          <MdOutlineLocalShipping />
        </a>
      </div>
      <div className="copyright">
        <small>&copy; 2023 - Saigon Sandwich Bakery</small>
      </div>
    </footer>
  );
};

export default Footer;
