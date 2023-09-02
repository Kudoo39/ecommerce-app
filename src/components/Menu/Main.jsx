import React from "react";
import "./Main.css";
import img1 from "../../assets/patee.jpg";
import img2 from "../../assets/grill.jpg";
import img3 from "../../assets/beef.jpg";
import img4 from "../../assets/kanacurry.jpg";
import img5 from "../../assets/bbq.jpg";
import img6 from "../../assets/vegan.jpg";
import img7 from "../../assets/kanaleike.jpg";
import img8 from "../../assets/grilled_chicken.jpg";
import img9 from "../../assets/porkbelly.jpg";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();

  const menuItems = [
    {
      id: 1,
      name: t("main.names1"),
      description: t("main.descriptions1"),
      price: "€7.20",
      image: img1,
    },
    {
      id: 2,
      name: t("main.names2"),
      description: t("main.descriptions2"),
      price: "€7.50",
      image: img2,
    },
    {
      id: 3,
      name: t("main.names3"),
      description: t("main.descriptions3"),
      price: "€8.20",
      image: img3,
    },
    {
      id: 4,
      name: t("main.names4"),
      description: t("main.descriptions4"),
      price: "€7.50",
      image: img4,
    },
    {
      id: 5,
      name: t("main.names5"),
      description: t("main.descriptions5"),
      price: "€7.20",
      image: img5,
    },
    {
      id: 6,
      name: t("main.names6"),
      description: t("main.descriptions6"),
      price: "€6.50",
      image: img6,
    },
    {
      id: 7,
      name: t("main.names7"),
      description: t("main.descriptions7"),
      price: "€6.50",
      image: img7,
    },
    {
      id: 8,
      name: t("main.names8"),
      description: t("main.descriptions8"),
      price: "€7.50",
      image: img8,
    },
    {
      id: 9,
      name: t("main.names9"),
      description: t("main.descriptions9"),
      price: "€7.95",
      image: img9,
    },
  ];

  return (
    <div className="main-menu-container">
      <div className="main-menu">
        {menuItems.map((item) => (
          <div className="main-menu-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="hstack-main">
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
