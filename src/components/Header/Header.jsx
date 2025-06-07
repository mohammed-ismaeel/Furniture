// Import React and necessary child components
import React from "react";
import Navbar from "../Navbar/Navbar"; // Top navigation bar component
import Hero from "../Hero/Hero"; // Hero section component
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
