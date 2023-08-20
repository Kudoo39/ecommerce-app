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
                interiors are small and cozy. The service was also very polite
                and fast!
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <h5>Fourth slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <h5>Fifth slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Feedback;
