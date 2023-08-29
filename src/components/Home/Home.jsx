import React from "react";
import img1 from "../../assets/vegan.jpg";
import img2 from "../../assets/pho.jpg";
import img3 from "../../assets/owner.jpg";
import "./Home.css";

const Home = () => (
  <div id="home">
    <div className="home_container">
      <article className="banhmi_item">
        <img src={img1} alt="photo about banhmi" />
        <h3>Banh Mi</h3>
        <p>
          Seasoned seitan, cucumber, radish, carrot, soy, coriander, onion,
          house sauce, chili, mayonnaise.
        </p>
      </article>
      <article className="banhmi_item">
        <img src={img2} alt="photo about pho" />
        <h3>Pho</h3>
        <p>
          Pho is a popular food in Vietnam, where it is served in households,
          street stalls and restaurants across the country. It is considered the
          national dish of Vietnam.
        </p>
      </article>
      <article className="banhmi_item">
        <img id="owner" src={img3} alt="photo about the owner" />
        <h3>Kim Huong Nguyen</h3>
        <p>
          Kim Huong Nguyen opened the Turku street food restaurant Saigon
          Sandwich Bakery, which has received positive feedback. The goal is to
          provide genuine Vietnamese flavors.
        </p>
        <p>
          "I started developing recipes and wanted to offer Vietnamese flavors
          for Finns to taste."
        </p>
      </article>
    </div>
  </div>
);

export default Home;
