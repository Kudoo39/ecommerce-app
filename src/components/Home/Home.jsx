import React from "react";
import img1 from "../../assets/vegan.jpg";
import img2 from "../../assets/pho.jpg";
import img3 from "../../assets/logo1.jpg";
import "./Home.css";
import { useTranslation } from "react-i18next";
import SubscriptionForm from "../SubscriptionForm";
import Feedback from "../Feedback/Feedback";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div id="home">
      <SubscriptionForm />
      <div className="home_container">
        <article className="banhmi_item">
          <img src={img1} alt="photo about banhmi" />
          <h3>Banh Mi</h3>
          <p>{t("home.banhmiDescription")}</p>
        </article>
        <article className="banhmi_item">
          <img src={img2} alt="photo about pho" />
          <h3>Pho</h3>
          <p>{t("home.phoDescription")}</p>
        </article>
        <article className="banhmi_item">
          <img id="owner" src={img3} alt="photo about the logo" />
          <h3>Kim Huong Nguyen</h3>
          <p>{t("home.ownerDescription1")}</p>
          <p>{t("home.ownerDescription2")}</p>
        </article>
      </div>
      <Feedback />
    </div>
  );
};

export default Home;
