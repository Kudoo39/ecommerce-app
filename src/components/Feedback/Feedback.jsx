import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Feedback.css";
import { useTranslation } from "react-i18next";

const Feedback = () => {
  const { t } = useTranslation();

  return (
    <div className="gray_background">
      <h2>{t("feedback.title")}</h2>
      <Carousel className="container" data-bs-theme="dark">
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <h5>Tommi</h5>
              <p>{t("feedback.customers1")}</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <h5>Elisa S.</h5>
              <p>{t("feedback.customers2")}</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <h5>Jari H.</h5>
              <p>{t("feedback.customers3")}</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <h5>The Originals</h5>
              <p>{t("feedback.customers4")}</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <h5>Kalypso F.</h5>
              <p>{t("feedback.customers5")}</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Feedback;
