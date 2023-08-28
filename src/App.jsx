import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Home />
      <Feedback />
      <Footer />
    </>
  );
};

export default App;
