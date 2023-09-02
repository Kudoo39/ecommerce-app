import React from "react";
import "./About.css";
import img from "../../assets/store.jpg";
import ceo from "../../assets/ceo.jpg";
import maker from "../../assets/owner.jpg";
import staff from "../../assets/staff.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const corporateLeadership = [
    {
      name: "Kim Huong Nguyen",
      position: t("about.founder.position"),
      description: t("about.founder.description"),
      image: maker,
    },
    {
      name: "Thuy Tien Nguyen",
      position: t("about.staff.position"),
      description: t("about.staff.description"),
      image: staff,
    },
  ];

  return (
    <div className="about-container">
      <h1 className="about-heading">{t("about.title")}</h1>
      <div className="about-hstack">
        <img src={img} className="about-photo" />
        <div className="about-section">
          <p>{t("about.description1")}</p>
          <p>{t("about.description2")}</p>
          <p>{t("about.description3")}</p>
        </div>
      </div>

      <div className="leadership-section">
        <h3>{t("about.leadershipTitle")}</h3>
        <div className="leadership-grid">
          {corporateLeadership.map((leader, index) => (
            <div key={index} className="leader-card">
              <img
                src={leader.image}
                alt={leader.name}
                className="leader-image"
              />
              <div className="leader-details">
                <h4 className="leader-name">{leader.name}</h4>
                <p className="leader-position">{leader.position}</p>
                <p className="leader-description">{leader.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
