import React from "react";
import "./About.css";
import img from "../../assets/store.jpg";
import ceo from "../../assets/ceo.jpg";
import maker from "../../assets/owner.jpg";
import staff from "../../assets/staff.jpg";

const corporateLeadership = [
  {
    name: "Erik Isokorpi",
    position: "CEO",
    description: "CEO",
    image: ceo,
  },
  {
    name: "Kim Huong Nguyen",
    position: "Executive Chef",
    description: "Executive Chef",
    image: maker,
  },
  {
    name: "Thuy Tien Nguyen",
    position: "Staff",
    description: "Staff",
    image: staff,
  },
];

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <div className="about-hstack">
        <img src={img} className="about-photo" />
        <div className="about-section">
          <p>
            Started in 2018, Kim Huong Nguyen opened the street food restaurant
            Saigon Sandwich Bakery in Turku's Kauppahalli, and the street food
            stand has been well received. The goal is to offer authentic
            Vietnamese flavors. At first, Kim Huong Nguyen had time to establish
            a street food stand on Puistokatu.
          </p>
          <p>
            The French brought white bread to Vietnam. The Vietnamese developed
            fillings between the bread. Freshly baked bread should be crispy and
            crumbly on the outside, but very soft on the inside, Kim Huong
            Nguyen describes. Kim Huong Nguyen continues that it took him three
            years to develop the recipe for the bread served in Turku, so that
            the end result was good and the bread is as crispy on the surface
            and soft on the inside as what is served on the streets of Saigon.
          </p>
          <p>
            In Turku's Kauppahalli, Saigon Sandwich sells about a hundred loaves
            of bread a day. There are many filling options: you can choose
            chicken, pork, beef, seitan or soy.
          </p>
        </div>
      </div>

      <div className="leadership-section">
        <h2>Corporate Leadership</h2>
        <div className="leadership-grid">
          {corporateLeadership.map((leader, index) => (
            <div key={index} className="leader-card">
              <img
                src={leader.image}
                alt={leader.name}
                className="leader-image"
              />
              <h3>{leader.name}</h3>
              <p>{leader.position}</p>
              <p>{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
