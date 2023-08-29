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

const menuItems = [
  {
    id: 1,
    name: "Saigon Original Patee",
    description:
      "Garlic Slice of Seasoned Pork, Pate, Chicken Slice, Cucumber, Radish, Coriander, Onion, Carrot, Soy, House Sauce, Mayonnaise, Chili.",
    price: "€7.2",
    image: img1,
  },
  {
    id: 2,
    name: "Saigon Grilled Meat",
    description:
      "Lemongrass, Grilled Pork, Cucumber, Radish, Carrot, Coriander, Soy, House Sauce, Mayonnaise, Chili.",
    price: "€7.5",
    image: img2,
  },
  {
    id: 3,
    name: "Beef Satay Chili",
    description:
      "Fried Beef Satey, Cucumber, Radish, Carrot, Onion, Coriander, House Sauce, Chili, Mayonnaise.",
    price: "€8.2",
    image: img3,
  },
  {
    id: 4,
    name: "Saigon Curry Chicken",
    description:
      "Curry Chicken, Curry, Cucumber, Radish, Carrot, Soy, Onion, Chili, House Sauce, Coriander, Mayonnaise.",
    price: "€7.5",
    image: img4,
  },
  {
    id: 5,
    name: "BBQ Seasoned Meat",
    description:
      "Pork BBQ Meat, Cucumber, Radish, Carrot, Soy, Chili, Coriander, Onion, House Sauce, Mayonnaise.",
    price: "€7.2",
    image: img5,
  },
  {
    id: 6,
    name: "Vegan",
    description:
      "Seasoned Seitan, Cucumber, Radish, Carrot, Soy, Coriander, Onion, House Sauce, Chili, Mayonnaise.",
    price: "€6.5",
    image: img6,
  },
  {
    id: 7,
    name: "Chicken Cutlet",
    description:
      "Chicken, Pate, Cucumber, Radish, Carrot, Soy, Chili, Onion, Coriander, House Sauce, Mayonnaise.",
    price: "€6.5",
    image: img7,
  },
  {
    id: 8,
    name: "Saigon Grilled Chicken",
    description:
      "Grilled Chicken, Cucumber, Radish, Carrot, Soy, Chili, Coriander, Onion, House Sauce, Mayonnaise.",
    price: "€7.5",
    image: img8,
  },
  {
    id: 9,
    name: "Hot Pork Belly",
    description:
      "Roasted Pork Belly, Satay, Cucumber, Radish, Carrot, Soybean, Chili, Coriander, Onion, House Sauce, Mayonnaise.",
    price: "€7.95",
    image: img9,
  },
];

const Main = () => {
  return (
    <div className="main-menu-container">
      <div className="main-menu">
        {menuItems.map((item) => (
          <div className="main-menu-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div class="hstack">
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
