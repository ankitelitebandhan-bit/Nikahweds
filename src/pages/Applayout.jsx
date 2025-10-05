import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Applayout;
