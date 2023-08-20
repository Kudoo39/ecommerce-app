import React from "react";
import img1 from "../assets/vegan.jpg";
import "./Home.css";

const Home = () => (
  <div id="home">
    <div className="home_container">
      <article className="banhmi_item">
        <img src={img1} alt="photo about banhmi" />
        <h5>Banh Mi</h5>
        <p>
          Seasoned seitan, cucumber, radish, carrot, soy, coriander, onion,
          house sauce, chili, mayonnaise
        </p>
      </article>
      <article className="banhmi_item">
        <img src={img1} alt="photo about banhmi" />
        <h5>Banh Mi</h5>
        <p>
          Seasoned seitan, cucumber, radish, carrot, soy, coriander, onion,
          house sauce, chili, mayonnaise
        </p>
      </article>
      <article className="banhmi_item">
        <img src={img1} alt="photo about banhmi" />
        <h5>Banh Mi</h5>
        <p>
          Seasoned seitan, cucumber, radish, carrot, soy, coriander, onion,
          house sauce, chili, mayonnaise
        </p>
      </article>
    </div>
  </div>
);

export default Home;
