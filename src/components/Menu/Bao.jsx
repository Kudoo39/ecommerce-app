import React from "react";
import img from "../../assets/bao.jpg";
import "./Bao.css";

const Bao = () => {
  const menuItems = [
    {
      id: 1,
      name: "Dish 1",
      description: "Description for Dish 1",
      price: "€5.99",
    },
    {
      id: 2,
      name: "Dish 2",
      description: "Description for Dish 2",
      price: "€6.49",
    },
    {
      id: 3,
      name: "Dish 3",
      description: "Description for Dish 3",
      price: "€6.49",
    },
    {
      id: 4,
      name: "Dish 4",
      description: "Description for Dish 4",
      price: "€6.49",
    },
    {
      id: 5,
      name: "Dish 5",
      description: "Description for Dish 5",
      price: "€6.49",
    },
  ];

  return (
    <div className="bao-menu-container">
      <div className="bao-image">
        <img src={img} alt="Photo about Bao" />
      </div>
      <div className="bao-menu-items">
        {menuItems.map((item) => (
          <div className="bao-menu-item" key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bao;
