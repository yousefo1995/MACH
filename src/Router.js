import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import HomePage from "./Pages/HomePage";
import OurWorkPage from "./Pages/OurWorkPage";
import ProductsPage from "./Pages/ProductsPage";
import ServicesPage from "./Pages/ServicesPage";
import NotFoundPage from "./Pages/NotFoundPage";
import NavAndFooterLayout from "./Pages/NavAndFooterLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <NavAndFooterLayout>
              <HomePage />
            </NavAndFooterLayout>
          }
        />

        <Route
          path="aboutUs"
          element={
            <NavAndFooterLayout>
              <AboutUsPage />
            </NavAndFooterLayout>
          }
        />
        <Route
          path="services"
          element={
            <NavAndFooterLayout>
              <ServicesPage />
            </NavAndFooterLayout>
          }
        />
        <Route
          path="products"
          element={
            <NavAndFooterLayout>
              <ProductsPage />
            </NavAndFooterLayout>
          }
        />
        <Route
          path="ourWork"
          element={
            <NavAndFooterLayout>
              <OurWorkPage />
            </NavAndFooterLayout>
          }
        />
        <Route
          path="contactUs"
          element={
            <NavAndFooterLayout>
              <ContactUsPage />
            </NavAndFooterLayout>
          }
        />

        <Route
          path="*"
          element={
            <NavAndFooterLayout>
              <NotFoundPage />
            </NavAndFooterLayout>
          }
        />
      </Routes>{" "}
    </BrowserRouter>
  );
};

export default Router;
