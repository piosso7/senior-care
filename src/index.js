import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Amenities from "./pages/Amenities";
import CostPayment from "./pages/CostPayment";
import NoPage from "./pages/NoPage";
import Fotter from "./pages/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/senior-care" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/cost-&-payment" element={<CostPayment />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    <Fotter />
  </BrowserRouter>
);
