import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../Language";

const Nav = () => {
  const { t } = useTranslation();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav>
      <div className="hstack-nav">
        <ul className={`nav-list ${isNavOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeNav}>
            {t("nav.home")}
          </Link>
          <Link to="/hour" onClick={closeNav}>
            {t("nav.hour")}
          </Link>
          <Link to="/menu" onClick={closeNav}>
            {t("nav.menu")}
          </Link>
          <Link to="/about" onClick={closeNav}>
            {t("nav.about")}
          </Link>
          <Link to="/contact" onClick={closeNav}>
            {t("nav.contact")}
          </Link>
        </ul>

        <button
          className={`nav-toggle ${isNavOpen ? "open" : ""}`}
          onClick={toggleNav}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Nav;
