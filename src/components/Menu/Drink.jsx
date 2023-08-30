import React from "react";
import "./Drink.css";
import img1 from "../../assets/cola.jpg";
import img2 from "../../assets/cola-zero.jpg";
import img3 from "../../assets/jaffa.jpg";
import img4 from "../../assets/pepsi.jpg";
import img5 from "../../assets/coffee.jpg";

const menuItems = [
  {
    id: 1,
    name: "Coca Cola",
    description:
      "The Classic Carbonated Soft Drink Renowned for Its Refreshing and Distinctive Flavor.",
    price: "€1.8",
    image: img1,
  },
  {
    id: 2,
    name: "Coca Cola Zero",
    description:
      "A Low-Calorie Alternative That Retains the Classic Taste of Coca-Cola.",
    price: "€1.8",
    image: img2,
  },
  {
    id: 3,
    name: "Jaffa",
    description: "A Delightful Treat Blending the Zesty Goodness of Orange.",
    price: "€1.8",
    image: img3,
  },
  {
    id: 4,
    name: "Pepsi MAX",
    description:
      "Pepsi is a popular carbonated soft drink recognized for its unique flavor.",
    price: "€1.8",
    image: img4,
  },
  {
    id: 5,
    name: "Vietnamese Iced Coffee",
    description:
      "Vietnamese Iced Coffee is a delicious and strong coffee treat made by dripping richly brewed coffee over ice, sweetened with condensed milk.",
    price: "€4.95",
    image: img5,
  },
];

const Drink = () => {
  return (
    <div className="drink-menu-container">
      <div className="drink-menu">
        {menuItems.map((item) => (
          <div className="drink-menu-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="hstack">
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
