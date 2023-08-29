import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="gray_background">
      <h2>Customer's Feedback</h2>
      <Carousel className="container" data-bs-theme="dark">
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <h5>Tommi</h5>
              <p>
                Really great tasting breads at a very affordable price. The
                location is comfortably on the edge of the city center and the
                interiors are small and cozy. The service was also very polite!
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <h5>Elisa S.</h5>
              <p>
                Crisp baguette and perfect toppings. I could eat it every day!
                You should also try the Vietnamese iced coffee. ❤
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <h5>Jari H.</h5>
              <p>
                Great rolls, just the right amount of heat and spices (of
                course, you can get exactly what you want by asking. Be prepared
                to wait in line.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <h5>The Originals</h5>
              <p>
                It's been almost every day since I found it, if you want
                authentic vietnamese food, go there. I love Bánh mì and freshly
                baked bread. (I'm walking there right now to get the feed)
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <h5>Kalypso F.</h5>
              <p>
                Excellent Bahn mi, delicious flavors and friendly staff! ! Never
                disappoints! Highly recommended!
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Feedback;
