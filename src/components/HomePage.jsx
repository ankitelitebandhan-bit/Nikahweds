import React from "react";
import Hero from "./Hero";
import ContactForm from "./ContactForm";
import Testimonials from "./Testimonials";
import About from "./About";
import Services from "./Services";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Testimonials />
      <Services />
      <ContactForm />
    </div>
  );
};
export default HomePage;
