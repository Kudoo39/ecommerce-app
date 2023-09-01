import React from "react";
import img1 from "../../assets/background7.jpg";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header-container">
      <div className="text-content">
        <h1>{t("header.title")}</h1>
        <p>
          {t("header.description.line1")}
          <br />
          {t("header.description.line2")}
          <br />
          {t("header.description.line3")}
          <br />
          {t("header.description.line4")}
        </p>
      </div>
      <div className="background-image-container">
        <img src={img1} alt="Banhmi background" className="header-image" />
      </div>
    </div>
  );
};

export default Header;
