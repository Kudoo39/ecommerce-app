import React from "react";
import img from "../../assets/bao.jpg";
import "./Bao.css";

const Bao = () => {
  const menuItems = [
    {
      id: 1,
      name: "1. Grilled Meat",
      price: "€5.4",
    },
    {
      id: 2,
      name: "2. Beef Satay Chili",
      price: "€5.9",
    },
    {
      id: 3,
      name: "3. Curry Chicken",
      price: "€5.4",
    },
    {
      id: 4,
      name: "4. Vegan",
      price: "€4.95",
    },
    {
      id: 5,
      name: "5. Grilled Chicken",
      price: "€5.4",
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
            <h4>{item.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bao;
