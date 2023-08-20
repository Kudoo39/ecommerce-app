import React from "react";
import "./Footer.css";
import { ImFacebook } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
const Footer = () => {
  return (
    <footer>
      <a href="" className="footer_name">
        SAIGON SANDWICH BAKERY
      </a>
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
    </footer>
  );
};

export default Footer;
