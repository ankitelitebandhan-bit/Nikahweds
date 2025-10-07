import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import HomePage from "./components/HomePage";
import TestimonialsPage from "./components/TestimonialsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
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
