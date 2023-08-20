import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Feedback.css";

const Feedback = () => {
  return (
    <Carousel className="container" data-bs-theme="dark">
      <Carousel.Item>
        <div className="carousel-content">
          <div className="bordered-box">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
    </Carousel>
  );
};

export default Feedback;
