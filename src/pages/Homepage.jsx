import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import IslamicWeddingSlider from "../components/IslamicWeddingSlider";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <IslamicWeddingSlider />
      <ContactForm />
    </div>
  );
};
