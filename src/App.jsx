import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hour from "./components/Hour/Hour";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useTranslation } from "react-i18next";

const App = () => {
  return (
    <Router>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/*" element={<Menu />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/hour/*" element={<Hour />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
