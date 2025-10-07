import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import HomePage from "./components/HomePage";
import TestimonialsPage from "./components/TestimonialsPage";
import AboutPage from "./components/AboutPage";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/blogs" element={<HomePage />} />
          <Route path="/privacy-policy" element={<HomePage />} />
          <Route path="/terms" element={<HomePage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
