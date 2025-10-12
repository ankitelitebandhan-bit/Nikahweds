import React from "react";
import { Outlet } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Applayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header or Navbar can go here */}
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Applayout;
