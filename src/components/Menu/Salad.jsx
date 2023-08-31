import React from "react";
import img from "../../assets/salad.jpg";
import "./Salad.css";

const Salad = () => {
  const menuItems = [
    {
      id: 1,
      name: "1. Grilled Meat Salad",
      price: "€8.50",
    },
    {
      id: 2,
      name: "2. Beef Satay Chili Salad",
      price: "€8.90",
    },
    {
      id: 3,
      name: "3. Curry Chicken Salad",
      price: "€8.50",
    },
    {
      id: 4,
      name: "4. Vegan Salad",
      price: "€8.20",
    },
    {
      id: 5,
      name: "5. Grilled Chicken Salad",
      price: "€8.50",
    },
  ];

  return (
    <div className="salad-menu-container">
      <div className="salad-menu-items">
        {menuItems.map((item) => (
          <div className="salad-menu-item" key={item.id}>
            <h3>{item.name}</h3>
            <h5>{item.price}</h5>
          </div>
        ))}
      </div>
      <div className="salad-image">
        <img src={img} alt="Photo about Salad" />
      </div>
    </div>
  );
};

export default Salad;
