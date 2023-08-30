import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <div className="about-section">
        <h2>Our History</h2>
        <p>
          Start in 2018, Kim Huong Nguyen opened the street food restaurant
          Saigon Sandwich Bakery in Turku's Kauppahalli, and the street food
          stand has been well received. The goal is to offer authentic
          Vietnamese flavors. At first, Kim Huong Nguyen had time to establish a
          street food stand on Puistokatu.
        </p>
        <p>
          The French brought white bread to Vietnam. The Vietnamese developed
          fillings between the bread. Freshly baked bread should be crispy and
          crumbly on the outside, but very soft on the inside, Kim Huong Nguyen
          describes. Kim Huong Nguyen continues that it took him three years to
          develop the recipe for the bread served in Turku, so that the end
          result was good and the bread is as crispy on the surface and soft on
          the inside as what is served on the streets of Saigon.
        </p>
        <p>
          In Turku's Kauppahalli, Saigon Sandwich sells about a hundred loaves
          of bread a day. There are many filling options: you can choose
          chicken, pork, beef, seitan or soy.
        </p>
      </div>
    </div>
  );
};

export default About;
