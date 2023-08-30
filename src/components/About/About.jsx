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
    description:
      "As the Chief Executive Officer (CEO), Erik Isokorpi plays a pivotal role in steering the company towards success. With a strategic vision and decisive leadership, Erik is responsible for not only managing the day-to-day operations of the store but also charting the course for its future direction. By fostering innovation and maintaining a strong market presence, Erik ensures that the store remains at the forefront of the industry.",
    image: ceo,
  },
  {
    name: "Kim Huong Nguyen",
    position: "Executive Chef",
    description:
      "As the Executive Chef, Kim Huong Nguyen wields her culinary expertise to orchestrate the gastronomic experiences that define the store. Her responsibilities span the entire spectrum of food management, from meticulously selecting the finest ingredients to crafting delectable dishes that delight the palate. With a keen eye for flavor and presentation, Kim Huong ensures that every meal served is a masterpiece in taste and aesthetics.",
    image: maker,
  },
  {
    name: "Thuy Tien Nguyen",
    position: "Staff",
    description:
      "As a valued member of our staff, Thuy Tien Nguyen embodies the essence of customer service excellence. With a warm and welcoming demeanor, Thuy Tien is dedicated to providing exceptional sales assistance to our esteemed customers. By offering personalized recommendations and addressing inquiries, she contributes to creating a shopping experience that is both enjoyable and satisfying for all patrons.",
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
        <h3>Corporate Leadership</h3>
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
