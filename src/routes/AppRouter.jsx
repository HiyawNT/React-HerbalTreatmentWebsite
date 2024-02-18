// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImgCards from "../components/ImgCards";
import CallToAction from "../components/CallToAction";
import ProdDetail from "../components/ProductDetails";
import Footer from "../components/Footer";
import HerbsList from "../components/HerbsList";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product-details" element={<ProdDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
