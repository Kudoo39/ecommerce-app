import React from "react";
import "./Drink.css";
import img1 from "../../assets/cola.jpg";
import img2 from "../../assets/cola-zero.jpg";
import img3 from "../../assets/jaffa.jpg";
import img4 from "../../assets/pepsi.jpg";
import img5 from "../../assets/coffee1.jpg";
import img6 from "../../assets/water.jpg";
import { useTranslation } from "react-i18next";

const Drink = () => {
  const { t } = useTranslation();

  const menuItems = [
    {
      id: 1,
      name: "Coca Cola",
      description: t("drink.descriptions1"),
      price: "€1.80",
      image: img1,
    },
    {
      id: 2,
      name: "Coca Cola Zero",
      description: t("drink.descriptions2"),
      price: "€1.80",
      image: img2,
    },
    {
      id: 3,
      name: "Jaffa",
      description: t("drink.descriptions3"),
      price: "€1.80",
      image: img3,
    },
    {
      id: 4,
      name: "Pepsi MAX",
      description: t("drink.descriptions4"),
      price: "€1.80",
      image: img4,
    },
    {
      id: 5,
      name: t("drink.cafe"),
      description: t("drink.descriptions5"),
      price: "€4.95",
      image: img5,
    },
    {
      id: 6,
      name: t("drink.water"),
      description: t("drink.descriptions6"),
      price: "€1.60",
      image: img6,
    },
  ];

  return (
    <div className="drink-menu-container">
      <div className="drink-menu">
        {menuItems.map((item) => (
          <div className="drink-menu-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="hstack-drink">
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

export default Drink;
