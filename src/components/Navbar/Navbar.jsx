// Import React and the hamburger menu icon from react-icons
import React, { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const buttonRef = useRef();

  return (
    <>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        triggerRef={buttonRef}
      />
      {/* Navbar component that displays the logo and navigation links */}
      <nav className="w-full h-32 px-32 flex justify-between items-center max-lg:h-24 max-lg:px-12 max-sm:px-6">
        {/* Logo or brand name */}
        <h2 className="text-4xl font-bold text-primary max-lg:text-2xl">
          Fruniture
        </h2>
        {/* Navigation links (hidden on small screens) */}
        <ul className="flex items-center gap-14 font-semibold text-sm text-black max-lg:hidden">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Doctors</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
        </ul>
        {/* Hamburger menu icon for mobile view (visible on small screens only) */}
        <button
          ref={buttonRef}
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="hidden max-lg:block"
        >
          <FaBars className="text-gray text-2xl" />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
